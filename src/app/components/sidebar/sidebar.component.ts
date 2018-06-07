import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { UtilService } from '../../services/util.service';
import { Router } from '@angular/router';

declare var $: any;

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: 'home', title: 'Home', icon: 'ti-panel', class: '' },
  { path: 'partidos', title: 'Partidos', icon: 'ti-user', class: '' },
  { path: 'partidos-del-dia', title: 'Partidos Del Dia', icon: 'ti-user', class: '' },
  // { path: 'login', title: 'Cerrar Sesión', icon: 'ti-close', class: 'active-pro' },
  // { path: 'category', title: 'Categoria', icon: 'ti-view-list-alt', class: '' },
  // { path: 'upgrade', title: 'Upgrade to PRO',  icon:'ti-export', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  // permite conocer el estado del usuario en la sesión
  // hiddenMenu: boolean;
  // activa el boton para acceder
  isDisabled: boolean;
  usuario: string;
  password: string;

  constructor(private loginService: LoginService
    , private utilService: UtilService
    , public router: Router) { }

  public menuItems: any[];
  ngOnInit() {
    this.isDisabled = true;
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    if (sessionStorage.getItem('idParticipante')) {
      this.loginService.guardarLogueado(true);
    } else {
      this.loginService.guardarLogueado(false);
    }
    if (!this.loginService.logueado) {
      this.router.navigate(['login']);
    }
  }

  validaForm(event: any) {
    // console.log(btoa(this.password));
    if (this.usuario && this.password) {
      if (this.usuario.length > 1 && this.password.length > 1) {
        this.isDisabled = false;
      } else {
        this.isDisabled = true;
      }
    } else {
      this.isDisabled = true;
    }
  }

  login() {
    this.loginService.autenticaUsuario(this.usuario, this.password).then((res) => {
      if (res.autenticado && res.autenticado !== 0) {
        sessionStorage.setItem('idParticipante', res.autenticado.toString());
        this.router.navigate(['home']);
        this.loginService.guardarLogueado(true);
        this.utilService.showNotification('success', 'ti-check-box', `Bienvenido ${this.usuario}!`, 'bottom', 'right');
        this.usuario = '';
        this.password = '';
      } else {
        this.utilService.showNotification('danger', 'ti-alert', 'Credenciales inválidas.', 'bottom', 'right');
        this.loginService.guardarLogueado(false);
      }
    }).catch(() => {
      this.utilService.showNotification('danger', 'ti-alert', 'Ha ocurrido un error. Contacte al admin.', 'bottom', 'right');
    });
  }

  cerrarSesion() {
    sessionStorage.clear();
    this.loginService.guardarLogueado(false);
    this.utilService.showNotification('success', 'ti-check-box', `Sesión cerrada con éxito!`, 'bottom', 'right');
    this.router.navigate(['login']);
  }

  isNotMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }
}
