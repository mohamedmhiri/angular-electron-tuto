import { ArticleListComponent } from './../../components/article/article-list/article-list.component';
import { ArticleSearchComponent } from './../../components/article/article-search/article-search.component';
import { TvaDelComponent } from './../../components/tva/tva-del/tva-del.component';
import { TvaUpdateComponent } from './../../components/tva/tva-update/tva-update.component';
import { TvaAddComponent } from './../../components/tva/tva-add/tva-add.component';
import { TvaComponent } from './../../components/tva/tva.component';
import { ArticleDelComponent } from './../../components/article/article-del/article-del.component';
import { ArticleViewComponent } from './../../components/article/article-view/article-view.component';
import { ArticleAddComponent } from './../../components/article/article-add/article-add.component';
import { ArticleUpdateComponent } from './../../components/article/article-update/article-update.component'
import { UtilModule } from './../util/util.module';
import { MenuRouterModule } from './../../routes/menu-router/menu-router.module';
import { ArticleComponent } from './../../components/article/article.component';
import { StatsComponent } from './../../components/stats/stats.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// clarity module
import { ClarityModule } from 'clarity-angular';

@NgModule({
   imports: [
    CommonModule,
    MenuRouterModule,
    HttpModule,
    UtilModule,
    ClarityModule
  ],
  declarations: [
    StatsComponent,
    ArticleComponent,
    ArticleAddComponent,
    ArticleViewComponent,
    ArticleUpdateComponent,
    ArticleDelComponent,
    ArticleSearchComponent,
    ArticleListComponent,

    TvaComponent,
    TvaAddComponent,
    TvaUpdateComponent,
    TvaDelComponent,
  ],
  exports: [
    HttpModule,
  ],
})
export class MenuModule { }
