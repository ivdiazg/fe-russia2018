import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// MATERIAL
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatCardModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';

// SERVICE
import { PartidosService } from './services/partidos.service';
import { UtilService } from './services/util.service';

// COMPONENTS
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SidebarModule } from './components/sidebar/sidebar.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { PartidosMainComponent } from './components/partidos/partidos-main/partidos-main.component';
import { PartidosDelDiaComponent } from './components/partidos/partidos-del-dia/partidos-del-dia.component';
import { ResultadoPartidoComponent } from './components/partidos/resultado-partido/resultado-partido.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PartidosMainComponent,
    PartidosDelDiaComponent,
    ResultadoPartidoComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatExpansionModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SidebarModule,
    NavbarModule,
    FooterModule
  ],
  providers: [
    PartidosService,
    UtilService],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
