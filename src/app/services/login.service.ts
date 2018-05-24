import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class LoginService {

  logueado: boolean;

  constructor(private http: HttpClient) { }

  public autenticaUsuario(username: string, password: string): Promise<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const REQUEST = {
      username: username,
      password: btoa(password)
    }
    return this.http
      .post('http://localhost:1337/autenticaUsuario', REQUEST, { headers })
      .toPromise()
      .then((response) => {
        return response;
      }).catch(() => {
        console.log('Server error');
      });
  }

  public obtenerLogueado() {
    return this.logueado;
  }

  public guardarLogueado(logueado: boolean) {
    this.logueado = logueado;
  }

}
