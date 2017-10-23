import { LoginComponent } from './../../components/login/login.component';
import { MenuComponent } from './../../components/menu/menu.component';
import { ErrorComponent } from './../../components/shared/error/error.component';
import { AppRouterModule } from './../../routes/app-router/app-router.module';
import { UtilModule } from './../util/util.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    UtilModule,
    AppRouterModule,
  ],
  declarations: [
    ErrorComponent,
    MenuComponent,
    LoginComponent    
  ],
  exports: [
    AppRouterModule,
  ]
})
export class CollectionModule { }
