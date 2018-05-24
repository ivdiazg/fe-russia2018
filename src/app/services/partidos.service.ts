import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ApuestaResultMatchReqModel, ApuestaModel } from '../components/model/apuestaMatch.model';

@Injectable()
export class PartidosService {

  constructor(private http: HttpClient) { }

  public getGroups(participante: Number): Promise<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .post('http://localhost:1337/groups', { participante: participante }, { headers })
      .toPromise()
      .then((response) => {
        return response;
      }).catch(() => {
        console.log('Server error');
      });
  }

  public getMatchesDay(participante: Number): Promise<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .post('http://localhost:1337/matchesOfTheDay', { participante: participante }, { headers })
      .toPromise()
      .then((response) => {
        return response;
      }).catch(() => {
        console.log('Server error');
      });
  }

  public selMatchForResult(): Promise<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .get('http://localhost:1337/selMatchForResult', { headers })
      .toPromise()
      .then((response) => {
        return response;
      }).catch(() => {
        console.log('Server error');
      });
  }

  public updApuestaMatch(apuestasMatches: ApuestaResultMatchReqModel[]): Promise<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .post('http://localhost:1337/updApuestaMatch', apuestasMatches, { headers })
      .toPromise()
      .then((response) => {
        return response;
      }).catch(() => {
        console.log('Server error');
      });
  }

  public updPuntajeApuesta(puntajesApuestas: ApuestaModel[]): Promise<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .post('http://localhost:1337/updPuntajeApuesta', puntajesApuestas, { headers })
      .toPromise()
      .then((response) => {
        return response;
      }).catch(() => {
        console.log('Server error');
      });
  }

  public updResultMatch(resultsMatches: ApuestaResultMatchReqModel[]): Promise<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .post('http://localhost:1337/updResultMatch', resultsMatches, { headers })
      .toPromise()
      .then((response) => {
        return response;
      }).catch(() => {
        console.log('Server error');
      });
  }

  public selApuestasMatch(idMatch): Promise<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const REQUEST = {
      partido: idMatch
    }
    return this.http
      .post('http://localhost:1337/selApuestasMatch', REQUEST, { headers })
      .toPromise()
      .then((response) => {
        return response;
      }).catch(() => {
        console.log('Server error');
      });
  }
}
