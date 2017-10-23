import { TvaAddComponent } from './../../components/tva/tva-add/tva-add.component';
import { TvaComponent } from './../../components/tva/tva.component';
import { ArticleAddComponent } from './../../components/article/article-add/article-add.component';
import { ArticleComponent } from './../../components/article/article.component';
import { StatsComponent } from './../../components/stats/stats.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

const ROUTES = [
    {
      path: '',
      redirectTo: 'stats',
      pathMatch: 'full'
    },
    /*{
        path: 'app',
        component: HelloComponent
    },*/
    {
      path: 'stats',
      component: StatsComponent
    },
    {
      path: 'article',
      component: ArticleComponent
    },
    {
      path: 'add-article',
      component: ArticleAddComponent
    },
    {
      path: 'tva',
      component: TvaComponent
    },
    {
      path: 'add-tva',
      component: TvaAddComponent
    }

]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),// Add routes to the app
  ],
  declarations: [

  ],
  providers: [
      {provide: APP_BASE_HREF, useValue: '/' }
  ],
  exports: [
      RouterModule
  ]
})
export class MenuRouterModule { }
