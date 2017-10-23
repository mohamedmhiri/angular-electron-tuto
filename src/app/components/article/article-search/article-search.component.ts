import { Article } from './../../../models/article';
import { Search } from './../../../models/search';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ArticleService } from './../../../services/article.service';
import { Component, OnInit, Output, EventEmitter, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'article-search',
  templateUrl: './article-search.component.html',
  styleUrls: ['./article-search.component.css']
})
export class ArticleSearchComponent implements OnInit {

  @Output() searchEvent = new EventEmitter<Search>()
  public searchForm: FormGroup
  public search: Search
  public buttonClass: string
  @Input() buttonSearch: string
  constructor(public fb: FormBuilder, public articleService: ArticleService) { }

  ngOnInit() {
    this.buttonClass = `btn btn-primary`
    this.search = new Search()
    this.createForm()
  }



  public createForm () {
    this.searchForm = this.fb.group({
      txt: [this.search.txt, [Validators.required]]
    })
  }

  public searchByText (txt: string) {
    const formModel = this.searchForm.value
    let $search = new Search()
    this.articleService.search(formModel.txt).subscribe(data => {
      $search.articles = data
      $search.txt = formModel.txt
      this.searchEvent.emit($search)
    })
  }


}
