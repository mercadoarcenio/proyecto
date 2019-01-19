import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../services/user.service';
import { NoticiaService } from '../services/noticia.sevice';
import {Noticia} from '../models/noticia'


@Component({
    selector: 'noticia-new',
    templateUrl: '../views/noticia.new.html',
    providers: [UserService, NoticiaService]
    
})
export class NoticiaNewComponent implements OnInit{
    public page_title: string;
    public identity;
    public token;
    public noticia: Noticia;
    public status_noticia;


    constructor(
        private _userService: UserService,
        private _noticiaService: NoticiaService,
        private _route: ActivatedRoute,
        private _router: Router
    ){
        this.page_title = 'crear nueva noticia';
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
    }
    ngOnInit(){
        if(this.identity == null && !this.identity.sub){
            this._router.navigate(['/login']);
        }else{
            this.noticia = new Noticia(1,'','','new','null');

        }
    }
    onSubmit(){
        console.log(this.noticia);
   
   this._noticiaService.create(this.token,this.noticia).subscribe(
           response =>{
               this.status_noticia = response.status; 

            if(this.status_noticia != 'success'){
               this.status_noticia= 'error';
           }else{
               this.noticia = response.data;
                
           }
           },

         
           error =>{
               console.log(<any>error);
           }
       );

}
    }
 
