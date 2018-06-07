import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { Router } from '@angular/router';
import { EstadisticasService } from '../../services/estadisticas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  labelsGral: string[] = [];
  seriesGral: Number[] = [];
  labelsTop: string[] = [];
  seriesTop: Number[] = [];
  participants: number;
  resultEstadisticas: any;
  position: number;
  points: number;
  resultadoExacto: number;

  constructor(public router: Router
    , private estadisticasService: EstadisticasService) { }

  ngOnInit() {
    if (!sessionStorage.getItem('idParticipante')) {
      this.router.navigate(['/login']);
      return;
    }

    this.estadisticasService.statsParticipantes().then((res) => {
      this.resultEstadisticas = res;
      this.generaEstadisticasGral(this.resultEstadisticas).then(() => {
        this.position = this.resultEstadisticas.map(x => x.participante).indexOf(Number(sessionStorage.getItem('idParticipante'))) + 1;
        if (this.position - 1 !== -1) {
          this.points = this.resultEstadisticas[this.position - 1].puntaje;
          this.estadisticasService.resultadoExactoParticipante(Number(sessionStorage.getItem('idParticipante')))
            .then(res => {
              this.resultadoExacto = res.exactos;
            });
          this.estadisticasService.countParticipantes().then((res) => {
            this.participants = res.participantes;
          });
        }
        new Chartist.Bar('#chartGeneral', {
          labels: this.labelsGral, // ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
          series: this.seriesGral // [1, 2, 3, 4, 5, 6, 7, 8, 9, 30, 31, 31, 33, 34]
        }, {
            distributeSeries: true,
            axisY: {
              onlyInteger: true,
            }
          });
      }).catch((err) => {

      });

      res = res.sort(function (a, b) { return (a.puntaje > b.puntaje) ? 1 : ((b.puntaje > a.puntaje) ? -1 : 0); })
        .reverse().slice(0, 5);
      this.generaEstadisticasTop(res).then(() => {
        new Chartist.Bar('#chartTop', {
          labels: this.labelsTop,
          series: [this.seriesTop]
        }, {
            seriesBarDistance: 10,
            reverseData: true,
            horizontalBars: true,
            axisX: {
              onlyInteger: true,
            },
            axisY: {
              offset: 70
            }
          });
      });
    });

    // new Chartist.Bar('#chartGeneral', {
    //   labels: this.labelsGral, // ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    //   series: this.seriesGral // [1, 2, 3, 4, 5, 6, 7, 8, 9, 30, 31, 31, 33, 34]
    // }, {
    //     distributeSeries: true
    //   });
  }

  generaEstadisticasGral(res: any): Promise<any> {
    return new Promise((resolve, reject) => {
      res.forEach(row => {
        this.labelsGral.push(row.nombre);
        this.seriesGral.push(row.puntaje !== null ? row.puntaje : 0);
      });
      resolve();
    });
  }

  generaEstadisticasTop(res: any): Promise<any> {
    return new Promise((resolve, reject) => {
      res.forEach(row => {
        this.labelsTop.push(row.nombre);
        this.seriesTop.push(row.puntaje !== null ? row.puntaje : 0);
      });
      resolve();
    });
  }

}
