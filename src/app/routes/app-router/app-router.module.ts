import { LoginComponent } from './../../components/login/login.component';
import { AuthGuard } from './../../services/auth-guard.service';
import { MenuComponent } from './../../components/menu/menu.component';
import { ErrorComponent } from './../../components/shared/error/error.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

const ROUTES = [
    {
      path: '',
      redirectTo: 'menu',
      pathMatch: 'full'
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'menu',
      loadChildren: '../../modules/menu/menu.module#MenuModule',
      canActivate: [AuthGuard],
      component: MenuComponent
    },
    {
      path: '**',
      component: ErrorComponent,
    }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),// Add routes to the app
  ],
  declarations: [],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/' }
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
