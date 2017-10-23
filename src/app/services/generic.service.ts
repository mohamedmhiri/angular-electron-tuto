import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class GenericService<Entity> {

  public headers = new Headers({ 'Content-Type': 'application/json' });
  public options = new RequestOptions({ headers: this.headers });
  constructor(protected http: Http) { 
  }
  public getAll(url: string): Observable<Entity[]> {
    return this.http.get(url)
      .map(this.extractData)
      .catch(this.handleError);
  }
  public getOne(url: string): Observable<Entity> {
    return this.http.get(url)
      .map(this.extractData)
      .catch(this.handleError)
  }
  public create(entity: Entity, url: string): Observable<Entity> {
    return this.http.post(url, entity, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }
 
  public update(entity: Entity, url: string): Observable<Entity> {
    return this.http.put(url, entity, this.options)
      .map(this.extractData)
      .catch(this.handleError)
  }

  public deleteOne(entity: Entity, url: string): Observable<Entity> {
    return this.http.delete(url, this.options)
    .map(this.extractData)
    .catch(this.handleError)
  }

  public extractData(res: Response) {
    let body = res.json();
    console.log(body)
    return body || {};
  }
  public handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
    
}
