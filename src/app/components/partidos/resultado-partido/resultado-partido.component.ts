import { Component, OnInit } from '@angular/core';
import { PartidosService } from '../../../services/partidos.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ApuestaResultMatchReqModel, ApuestaModel } from '../../model/apuestaMatch.model';
import { UtilService } from '../../../services/util.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultado-partido',
  templateUrl: './resultado-partido.component.html',
  styleUrls: ['./resultado-partido.component.css']
})
export class ResultadoPartidoComponent implements OnInit {

  cols = 1;
  tiles = [];
  matches = [];
  form = new FormGroup({});
  private resultsMatches: ApuestaResultMatchReqModel[];

  constructor(private partidosService: PartidosService
    , private utilService: UtilService
    , public router: Router) { }

  ngOnInit() {
    if (sessionStorage.getItem('idParticipante')) {
      this.router.navigate(['/login']);
      return;
    }
    this.resultsMatches = []
    this.partidosService.selMatchForResult().then((res) => {
      this.cols = res.cols;
      this.tiles = res.tiles;
      this.matches = res.matches;
      let obj = {};
      for (const match of res.matches) {
        obj[`match${match.idPartido}A`] = new FormControl(match.golesA ? match.golesA : '0');
        obj[`match${match.idPartido}B`] = new FormControl(match.golesB ? match.golesB : '0');
      }
      this.form = new FormGroup(obj);
    });
  }

  saveResults() {
    let resultsMatches: ApuestaResultMatchReqModel[] = [];
    for (const partido of this.matches) {
      const resultMatch = new ApuestaResultMatchReqModel;
      resultMatch.idPartido = partido.idPartido;
      resultMatch.golesA = Number.parseInt(this.form.get(`match${partido.idPartido}A`).value);
      resultMatch.golesB = Number.parseInt(this.form.get(`match${partido.idPartido}B`).value);
      if (resultMatch.golesA > resultMatch.golesB) {
        resultMatch.equipoPaisGanador = partido.IdEquipoA;
      } else if (resultMatch.golesB > resultMatch.golesA) {
        resultMatch.equipoPaisGanador = partido.IdEquipoB;
      } else {
        resultMatch.equipoPaisGanador = null;
      }
      resultMatch.competicion = partido.competicion_partido;
      resultMatch.participante = 1; // participante en session storage
      resultsMatches.push(resultMatch);
    }

    this.resultsMatches = resultsMatches;

    this.partidosService.updResultMatch(resultsMatches)
      .then((res) => {
        if (res.indexOf(false) !== -1) {
          this.utilService.showNotification('danger', 'ti-alert', 'Ha ocurrido un error. Comuniquese con el admin.', 'bottom', 'right');
        } else {
          // this.utilService.showNotification('success', 'ti-check-box', 'Datos almacenados correctamente!', 'bottom', 'right');
          // LLAMADA A METODO QUE CALCULA LOS RESULTADOS
          this.setPuntajeMatches(resultsMatches);
        }
      }).catch((err) => {
        console.error(err);
      });
  }

  setPuntajeMatches(resultsMatches: ApuestaResultMatchReqModel[]) {
    resultsMatches.forEach(match => {
      this.getApuestasByMatch(match.idPartido).then((res) => {
        console.log(res);
      });
    });
  }

  getApuestasByMatch(idMatch) {
    let puntajesApuestas: ApuestaModel[] = [];
    return new Promise((resolve, reject) => {
      this.partidosService.selApuestasMatch(idMatch).then((res: ApuestaModel[]) => {
        res.forEach(apuesta => {
          let resultMatch = this.resultsMatches.find(x => x.idPartido === idMatch);
          let puntos = 0;
          if (apuesta.golesA === resultMatch.golesA && apuesta.golesB === resultMatch.golesB) {
            let puntos = 5;
          } else if (apuesta.equipoPaisGanador === resultMatch.equipoPaisGanador) {
            let puntos = 3;
          } else {
            let puntos = 0;
          }
          const puntajeApuesta = new ApuestaModel;
          puntajeApuesta.partido_apuesta = resultMatch.idPartido;
          puntajeApuesta.participante = 1; // participante en session storage
          puntajeApuesta.puntos = puntos;
          puntajesApuestas.push(puntajeApuesta);
        });
        console.log(puntajesApuestas);

        this.partidosService.updPuntajeApuesta(puntajesApuestas)
          .then((res) => {
            console.log(res);
            if (res.indexOf(false) !== -1) {
              this.utilService.showNotification('danger', 'ti-alert', `Ha ocurrido un error. Comuniquese con el admin.`, 'bottom', 'right');
            } else {
              this.utilService.showNotification('success', 'ti-check-box', `Datos de partido ${puntajesApuestas[0].partido_apuesta} almacenados correctamente!`, 'bottom', 'right');
            }
          }).catch((err) => {
            console.error(err);
          });
      })
    });
  }
}
