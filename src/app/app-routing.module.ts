import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PartidosMainComponent } from './components/partidos/partidos-main/partidos-main.component';
import { PartidosDelDiaComponent } from './components/partidos/partidos-del-dia/partidos-del-dia.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'partidos', component: PartidosMainComponent },
  { path: 'partidos-del-dia', component: PartidosDelDiaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
