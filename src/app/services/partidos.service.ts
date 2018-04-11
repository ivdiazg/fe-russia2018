import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ApuestaMatchReqModel } from '../components/model/apuestaMatch.model';

@Injectable()
export class PartidosService {

  constructor(private http: HttpClient) { }

  public getGroups(): Promise<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .get('http://localhost:1337/groups', { headers })
      .toPromise()
      .then((response) => {
        return response;
      }).catch(() => {
        console.log('Server error');
      });
  }

  public getMatchesDay(): Promise<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .get('http://localhost:1337/matchesOfTheDay', { headers })
      .toPromise()
      .then((response) => {
        console.log(response);
        return response;
      }).catch(() => {
        console.log('Server error');
      });
  }

  public updApuestaMatch(apuestasMatches: ApuestaMatchReqModel[]): Promise<any> {
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
}
