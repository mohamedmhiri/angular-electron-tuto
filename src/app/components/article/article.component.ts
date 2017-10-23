import { Search } from './../../models/search';
import { FormBuilder } from '@angular/forms';
import { Article } from './../../models/article';
import { Observable } from 'rxjs/Observable';
import { ArticleService } from './../../services/article.service';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { State } from "clarity-angular";

@Component({
  selector: 'article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService],
})
export class ArticleComponent implements OnInit {

  public total: number;
  public loading: boolean = true;
  public entities: Article[]
  public $article: Article
  public action: string
  public $code: string
  public buttonSearchClass: string
  constructor(public articleService: ArticleService) { }

  ngOnInit() {
    this.$article = new Article()
    this.buttonSearchClass = 'yes'
    this.articleService.getAll().subscribe(data => {
      this.loading = true;
      this.entities = data
      this.total = this.entities.length
      this.loading = false;
      this.action = 'list'
    })
  }

  public postEvent ($action: string) {
    this.action = $action
    if ($action !== 'del') {
      this.buttonSearchClass = 'yes'
    }
  }

  /*public refresh(state: State) {
    this.loading = true;
    // We convert the filters from an array to a map,
    // because that's what our backend-calling service is expecting
    let filters: { [prop: string]: any[] } = {};
    if (state.filters) {
      for (let filter of state.filters) {
        let { property, value } = <{ property: string, value: string }>filter;
        filters[property] = [value];
      }
    }
    this.inventory.filter(filters)
      .sort(<{ by: string, reverse: boolean }>state.sort)
      .fetch(state.page.from, state.page.size)
      .then((result) => {
        this.entities = result.entities;
        this.total = result.length;
        this.loading = false;
      });
  }*/

  public searchEvent ($search: Search) {
    if ($search.articles.length === 0) {
      this.action = 'add'
      this.$article = new Article()
      this.$code = $search.txt
    } else {
      this.$article = $search.articles[0]
      this.action = 'update'
    }
    this.buttonSearchClass = 'no'
  }
  
}
