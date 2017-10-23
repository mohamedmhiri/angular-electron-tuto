import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRouterModule } from './../../routes/app-router/app-router.module';
import { LoginComponent } from './../../components/login/login.component';
import { MenuComponent } from './../../components/menu/menu.component';
import { ErrorComponent } from './../../components/shared/error/error.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [

  ]
})
export class UtilModule { }
