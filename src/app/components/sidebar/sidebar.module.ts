import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@NgModule({
  imports: [RouterModule, CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [SidebarComponent],
  exports: [SidebarComponent],
  providers: [LoginService]
})

export class SidebarModule { }
