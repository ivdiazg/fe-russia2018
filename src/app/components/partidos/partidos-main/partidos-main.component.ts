import { Component, OnInit, ViewChildren } from '@angular/core';
import { PartidosService } from '../../../services/partidos.service';

@Component({
  selector: 'app-partidos-main',
  templateUrl: './partidos-main.component.html',
  styleUrls: ['./partidos-main.component.css']
})
export class PartidosMainComponent implements OnInit {

  groupMatches: any;
  step = 0;
  @ViewChildren('match') inputs;

  constructor(private partidosService: PartidosService) { }

  ngOnInit() {

    this.partidosService.obtenerGrupos().then((res) => {
      this.groupMatches = res;
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

  show() {
    for (const group of this.groupMatches) {
      for (const partido of group.partidos) {
        if (this.inputs._results.find(x => x.name === `match${partido.idPartido}A`).value) {
          console.log(`match${partido.idPartido}A`, this.inputs._results.find(x => x.name === `match${partido.idPartido}A`).value);
        }
        if (this.inputs._results.find(x => x.name === `match${partido.idPartido}A`).value) {
          console.log(`match${partido.idPartido}B`, this.inputs._results.find(x => x.name === `match${partido.idPartido}B`).value);
        }
      }
    }
  }
}
