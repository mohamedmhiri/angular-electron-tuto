import { State } from 'clarity-angular';
import { ArticleService } from './../../../services/article.service';
import { Article } from './../../../models/article';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
  providers: [ArticleService]
})
export class ArticleListComponent implements OnInit {

  public total: number;
  public loading: boolean = true;
  public entities: Article[]

  constructor(public articleService: ArticleService) { }
  ngOnInit() {
    this.articleService.getAll().subscribe(data => {
      this.loading = true;
      this.entities = data
      this.total = this.entities.length
      this.loading = false;
    })
  }

  public refresh (state: State) {
    this.loading = true;
    this.articleService.getAll().subscribe(data => {
      this.total = data.length
      this.entities = data.slice(state.page.from, state.page.to +1)
      this.loading = false;
    })   
  }

}
