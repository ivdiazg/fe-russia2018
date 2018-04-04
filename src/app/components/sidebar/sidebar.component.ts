import { Component, OnInit } from '@angular/core';

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: 'home', title: 'Home', icon: 'ti-panel', class: '' },
  { path: 'partidos', title: 'Partidos', icon: 'ti-user', class: '' },
  // { path: 'category', title: 'Categoria', icon: 'ti-view-list-alt', class: '' },
  // { path: 'product', title: 'Producto', icon: 'ti-tag', class: '' },
  // { path: 'sale', title: 'Venta', icon: 'ti-shopping-cart', class: '' },
  // { path: 'icons', title: 'Icons', icon: 'ti-pencil-alt2', class: '' },
  // { path: 'maps', title: 'Maps', icon: 'ti-map', class: '' },
  // { path: 'notifications', title: 'Notifications', icon: 'ti-bell', class: '' },
  // { path: 'upgrade', title: 'Upgrade to PRO',  icon:'ti-export', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  public menuItems: any[];
  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  isNotMobileMenu() {
    // if ($(window).width() > 991) {
    //   return false;
    // }
    return true;
  }

}
