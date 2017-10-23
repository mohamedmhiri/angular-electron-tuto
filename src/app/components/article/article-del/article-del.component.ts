import { ArticleService } from './../../../services/article.service';
import { Article } from './../../../models/article';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'article-del',
  templateUrl: './article-del.component.html',
  styleUrls: ['./article-del.component.css']
})
export class ArticleDelComponent implements OnInit {

  @Input() article: Article
  @Output() del_action = new EventEmitter<string>()
  constructor(public articleService: ArticleService) { }

  ngOnInit() {
  }

  public onReset () {
    this.del_action.emit('list')
  }

  public delArticle () {
    this.articleService.deleteOne(this.article).subscribe(data => {
      console.log(data)
    })
    this.del_action.emit('list')
  }

}
