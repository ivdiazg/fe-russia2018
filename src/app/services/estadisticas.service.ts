import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class EstadisticasService {

  constructor(private http: HttpClient) { }

  public statsParticipantes(): Promise<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .get(environment.ENDPOINT_BACK + 'statsParticipantes', { headers })
      .toPromise()
      .then((response) => {
        return response;
      }).catch(() => {
        console.log('Server error');
      });
  }

  public resultadoExactoParticipante(participante: number): Promise<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .post(environment.ENDPOINT_BACK + 'resultadoExactoParticipante', { participante: participante }, { headers })
      .toPromise()
      .then((response) => {
        return response;
      }).catch(() => {
        console.log('Server error');
      });
  }

  public countParticipantes(): Promise<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .get(environment.ENDPOINT_BACK + 'countParticipantes', { headers })
      .toPromise()
      .then((response) => {
        return response;
      }).catch(() => {
        console.log('Server error');
      });
  }
}
