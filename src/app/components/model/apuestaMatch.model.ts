export class ApuestaResultMatchReqModel {
  idPartido?: number;
  golesA?: number;
  golesB?: number;
  equipoPaisGanador?: number;
  competicion: number;
  participante: number;
}

export class ApuestaModel {
  idApuesta: number;
  partido_apuesta: number;
  golesA?: number;
  golesB?: number;
  equipoPaisGanador?: number;
  competicion: number;
  participante: number;
  puntos: number;
}