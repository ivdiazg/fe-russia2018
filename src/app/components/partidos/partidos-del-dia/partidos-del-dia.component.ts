import { Component, OnInit } from '@angular/core';
import { PartidosService } from '../../../services/partidos.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ApuestaMatchReqModel } from '../../model/apuestaMatch.model';
import { UtilService } from '../../../services/util.service';

@Component({
  selector: 'app-partidos-del-dia',
  templateUrl: './partidos-del-dia.component.html',
  styleUrls: ['./partidos-del-dia.component.css']
})
export class PartidosDelDiaComponent implements OnInit {

  cols = 1;
  tiles = [];
  matches = [];
  form = new FormGroup({});

  constructor(private partidosService: PartidosService
    , private utilService: UtilService) { }

  ngOnInit() {
    this.partidosService.getMatchesDay().then((res) => {
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

  show() {
    let apuestasMatches: ApuestaMatchReqModel[] = [];
    for (const partido of this.matches) {
      const apuestaMatch = new ApuestaMatchReqModel;
      apuestaMatch.idPartido = partido.idPartido;
      apuestaMatch.golesA = this.form.get(`match${partido.idPartido}A`).value;
      apuestaMatch.golesB = this.form.get(`match${partido.idPartido}B`).value;
      apuestaMatch.competicion = partido.competicion_partido;
      apuestaMatch.participante = 1; // participante en session storage
      apuestasMatches.push(apuestaMatch);
    }

    this.partidosService.updApuestaMatch(apuestasMatches)
      .then((res) => {
        if (res.indexOf(false) !== -1) {
          this.utilService.showNotification('danger', 'ti-alert', 'Ha ocurrido un error. Comuniquese con el admin.', 'bottom', 'right');
        } else {
          this.utilService.showNotification('success', 'ti-check-box', 'Datos almacenados correctamente!', 'bottom', 'right');
        }
      }).catch((err) => {
        console.error(err);
      });


    // if (this.form.get(`match${partido.idPartido}A`).value) {
    //   console.log(`${partido.idPartido}A`, this.form.get(`match${partido.idPartido}A`).value);
    // }
    // if (this.form.get(`match${partido.idPartido}B`).value) {
    //   console.log(`${partido.idPartido}B`, this.form.get(`match${partido.idPartido}B`).value);
    // }
  }
}