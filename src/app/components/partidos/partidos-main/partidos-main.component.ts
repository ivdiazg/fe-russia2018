import { Component, OnInit, ViewChildren } from '@angular/core';
import { PartidosService } from '../../../services/partidos.service';
import { FormGroup, FormControl } from '@angular/forms';
import { DISABLED } from '@angular/forms/src/model';

@Component({
  selector: 'app-partidos-main',
  templateUrl: './partidos-main.component.html',
  styleUrls: ['./partidos-main.component.css']
})
export class PartidosMainComponent implements OnInit {

  groupMatches: any;
  step = 0;
  @ViewChildren('match') inputs;
  form = new FormGroup({});

  constructor(private partidosService: PartidosService) { }

  ngOnInit() {

    this.partidosService.getGroups().then((res) => {
      this.groupMatches = res;
      console.log(this.groupMatches);
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
    for (const group of this.groupMatches) {
      for (const match of group.matches) {
        if (match.habilitado) {
          console.log(`${match.idPartido}A`, this.form.get(`match${match.idPartido}A`).value);
          console.log(`${match.idPartido}B`, this.form.get(`match${match.idPartido}B`).value);
        }
      }
    }
  }
}
