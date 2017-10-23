import { Article } from './../models/article';
import { GenericService } from './generic.service';
import { Inject, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ArticleService extends GenericService<Article>{
  public url: string = ''
  constructor(@Inject(Http)http: Http) {
    super(http)
    this.url = 'http://localhost:3000/api/article/'
   }
  public getAll(): Observable<Article[]> {
    return super.getAll(this.url)
  }
  public create(article: Article): Observable<Article> {
    return super.create(article, `${this.url}`)
  }
  public getOne(id: string): Observable<Article> {
    return super.getOne(`${this.url}${id}`)
  }
  public update(article: Article): Observable<Article> {
    return super.update(article, `${this.url}${article._id}`)
  }
  public deleteOne(article: Article): Observable<Article> {
    return super.deleteOne(article, `${this.url}${article._id}`)
  }
  public startsWith (data: string): Observable<Article[]> {
    return this.http.get(`${this.url}startsWith/${data}`)
    .map(res => res.json())
  }
  public search (data: string): Observable<Article[]> {
    return this.http.get(`${this.url}search/${data}`)
    .map(res => res.json())
  }
}
