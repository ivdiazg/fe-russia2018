export class MatchRes {
  NombreA?: string;
  NombreB?: string;
  competicion_partido?: number;
  fechaPartido?: string;
  golesA?: number;
  golesB?: number;
  habilitado?: number;
  idPartido?: number;
  keynameA?: string;
  keynameB?: string;
  puntos?: number;
}

export class GroupsMatches {
  group?: string;
  matches?: MatchRes[];
}