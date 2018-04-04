import { Component, OnInit } from '@angular/core';
import { PartidosService } from '../../../services/partidos.service';

@Component({
  selector: 'app-partidos-main',
  templateUrl: './partidos-main.component.html',
  styleUrls: ['./partidos-main.component.css']
})
export class PartidosMainComponent implements OnInit {

  groups: any;

  constructor(private partidosService: PartidosService) { }

  ngOnInit() {

    this.partidosService.obtenerGrupos().then((res) => {
      this.groups = res;
    });
  }

}
