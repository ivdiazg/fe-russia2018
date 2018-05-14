import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PartidosMainComponent } from './components/partidos/partidos-main/partidos-main.component';
import { PartidosDelDiaComponent } from './components/partidos/partidos-del-dia/partidos-del-dia.component';
import { ResultadoPartidoComponent } from './components/partidos/resultado-partido/resultado-partido.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      { path: '', loadChildren: 'app/features/login/login.module#LoginModule' },
    ]
  },
  {
    path: '',
    // component: PrivateContainerComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'partidos', component: PartidosMainComponent },
      { path: 'partidos-del-dia', component: PartidosDelDiaComponent },
      { path: 'ing-resultado-partido', component: ResultadoPartidoComponent },

      // { path: '', loadChildren: 'app/features/dashboard/dashboard.module#DashboardModule' },
      // { path: '', loadChildren: 'app/features/account/account.module#AccountModule' },
    ],
    canActivate: [
      // AuthGuardService
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: '/login' }
  // { path: 'login', component: LoginComponent },
  // { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
