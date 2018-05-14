import { Component, Inject, OnInit, ViewChildren } from '@angular/core';
import { PartidosService } from '../../../services/partidos.service';
import { FormGroup, FormControl } from '@angular/forms';
import { DISABLED } from '@angular/forms/src/model';
import { GroupsMatches } from '../../model/partido.model';
import { ApuestaResultMatchReqModel } from '../../model/apuestaMatch.model';
import { UtilService } from '../../../services/util.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partidos-main',
  templateUrl: './partidos-main.component.html',
  styleUrls: ['./partidos-main.component.css']
})
export class PartidosMainComponent implements OnInit {

  groupMatches: GroupsMatches[];
  step = 0;
  @ViewChildren('match') inputs;
  form = new FormGroup({});

  constructor(private partidosService: PartidosService
    , private utilService: UtilService
    , public router: Router) { }

  ngOnInit() {
    // if (!sessionStorage.getItem('idParticipante')) {
    //   console.log('entro');
    //   this.router.navigate(['/login']);
    //   return;
    // }
    this.partidosService.getGroups().then((res) => {
      this.groupMatches = res;
      let obj = {};
      for (const group of this.groupMatches) {
        for (const match of group.matches) {
          obj[`match${match.idPartido}A`] =
            new FormControl({
              value: match.golesA ? match.golesA : match.habilitado ? '0' : ''
              , disabled: !match.habilitado
            });
          obj[`match${match.idPartido}B`] =
            new FormControl({
              value: match.golesB ? match.golesB : match.habilitado ? '0' : ''
              , disabled: !match.habilitado
            });
        }
      }
      this.form = new FormGroup(obj);
    });
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  saveResults() {
    let APUESTA_MATCH_GROUP = [];
    let APUESTAS_MATCHES: ApuestaResultMatchReqModel[] = [];
    for (const group of this.groupMatches) {
      APUESTA_MATCH_GROUP = group.matches.filter(x => x.habilitado === 1);
      APUESTA_MATCH_GROUP.forEach(match => {
        const APUESTA = new ApuestaResultMatchReqModel;
        APUESTA.idPartido = match.idPartido;
        APUESTA.golesA = this.form.get(`match${match.idPartido}A`).value;
        APUESTA.golesB = this.form.get(`match${match.idPartido}B`).value;
        APUESTA.competicion = match.competicion_partido;
        APUESTA.participante = 1; // participante en session storage
        APUESTAS_MATCHES.push(APUESTA);
      });
    }
    this.partidosService.updApuestaMatch(APUESTAS_MATCHES)
      .then((res) => {
        if (res.indexOf(false) !== -1) {
          this.utilService.showNotification('danger', 'ti-alert', 'Ha ocurrido un error. Comuniquese con el admin.', 'bottom', 'right');
        } else {
          this.utilService.showNotification('success', 'ti-check-box', 'Datos almacenados correctamente!', 'bottom', 'right');
        }
      })
      .catch(err => {
        console.error(err);
      });
  }
}