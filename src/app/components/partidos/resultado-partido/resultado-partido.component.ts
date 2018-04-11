import { Component, OnInit } from '@angular/core';
import { PartidosService } from '../../../services/partidos.service';
import { FormControl, FormGroup } from '@angular/forms';

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

  constructor(private partidosService: PartidosService) { }

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
    for (const partido of this.matches) {
      if (this.form.get(`match${partido.idPartido}A`).value) {
        console.log(`${partido.idPartido}A`, this.form.get(`match${partido.idPartido}A`).value);
      }
      if (this.form.get(`match${partido.idPartido}B`).value) {
        console.log(`${partido.idPartido}B`, this.form.get(`match${partido.idPartido}B`).value);
      }
    }
  }
}
