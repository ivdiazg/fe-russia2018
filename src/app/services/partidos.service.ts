import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PartidosService {

  constructor(private http: HttpClient) { }

  public obtenerGrupos(): Promise<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
    return this.http
      .get('http://localhost:1337/groups', { headers })
      .toPromise()
      .then((response) => {
        return response;
      }).catch(() => {
        console.log('Server error')
      });
  }
}
