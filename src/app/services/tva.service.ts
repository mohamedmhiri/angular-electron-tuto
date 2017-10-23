import { Tva } from './../models/tva';
import { GenericService } from './generic.service';
import { Inject, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class TvaService extends GenericService<Tva>{
  public url: string = ''
  constructor(@Inject(Http)http: Http) {
    super(http)
    this.url = 'http://localhost:3000/api/tva/'
   }
  public getAll(): Observable<Tva[]> {
    return super.getAll(this.url)
  }
  public create(tva: Tva): Observable<Tva> {
    return super.create(tva, `${this.url}`)
  }
  public getOne(id: string): Observable<Tva> {
    return super.getOne(`${this.url}${id}`)
  }
  public update(tva: Tva): Observable<Tva> {
    return super.update(tva, `${this.url}${tva._id}`)
  }
  public deleteOne(tva: Tva): Observable<Tva> {
    return super.deleteOne(tva, `${this.url}${tva._id}`)
  }

}
