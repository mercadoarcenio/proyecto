import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import "rxjs/add/operator/map";
import {Observable} from 'rxjs/Observable';
import {GLOBAL} from './global';

@Injectable()
export class NoticiaService{
    public url:string;
    constructor(
        private _http: Http
         
    ){
        this.url  = GLOBAL.url;
    }
    create(token,noticia){
       let json = JSON.stringify(noticia);
       let params = "json="+json+"&authorization="+token;
       let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

       return this._http.post(this.url+'/noticia/new',params,{headers:headers})
       					  .map(res => res.json());
    }
    // getNoticias(token,page = null){
    //   let params = "authorization="+token;
    //   let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

    //   if(page == null){
    //     page = 1;
    //   }
    //   return this._http.post(this.url+'/noticia/list?page='+page,params,{headers:headers})
    //                    .map(res=>res.json());
    // }
}