import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/RX';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  private _url:string='https://fcctop100.herokuapp.com/api/fccusers/top/recent';
  private _url2:string='https://fcctop100.herokuapp.com/api/fccusers/top/alltime';
  constructor(private _http:Http) { }

  //gets Data FCC top 100
  getFccTop100():Observable<any[]>{
    //ResponseMap
    return this._http.get(this._url).map(resp=>resp.json());
  }
  getAllTime():Observable<any[]>{
    return this._http.get(this._url2).map(resp=>resp.json());
  }
}
