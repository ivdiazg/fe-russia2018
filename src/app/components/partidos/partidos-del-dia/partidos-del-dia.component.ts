import { Component, OnInit, ViewChildren } from '@angular/core';
import { PartidosService } from '../../../services/partidos.service';

@Component({
  selector: 'app-partidos-del-dia',
  templateUrl: './partidos-del-dia.component.html',
  styleUrls: ['./partidos-del-dia.component.css']
})
export class PartidosDelDiaComponent implements OnInit {

  cols = 1;
  tiles = [];
  matches = [];
  @ViewChildren('match') inputs;

  constructor(private partidosService: PartidosService) { }

  ngOnInit() {
    this.partidosService.getMatchesDay().then((res) => {
      this.cols = res.cols;
      this.tiles = res.tiles;
      this.matches = res.matches;
    });
  }

  show() {
    for (const partido of this.matches) {
      if (this.inputs._results.find(x => x.name === `match${partido.idPartido}A`).value) {
        console.log(`match${partido.idPartido}A`, this.inputs._results.find(x => x.name === `match${partido.idPartido}A`).value);
      } else {
        console.log(`match${partido.idPartido}A`, '0');
      }
      if (this.inputs._results.find(x => x.name === `match${partido.idPartido}B`).value) {
        console.log(`match${partido.idPartido}B`, this.inputs._results.find(x => x.name === `match${partido.idPartido}B`).value);
      } else {
        console.log(`match${partido.idPartido}B`, '0');
      }
    }
  }

}
