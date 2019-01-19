import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../services/user.service';
import { NoticiaService } from '../services/noticia.sevice';
import {Noticia} from '../models/noticia'


@Component({
	selector: 'default',
	templateUrl: '../views/default.html',
	providers: [UserService,NoticiaService]


})
export class DefaultComponent implements OnInit{
	public title: string;
	public identity;
	public token;
	public noticias: Array<Noticia>;
	



	constructor(
   		private _route: ActivatedRoute,
   		private _roter: Router,
   		private _userService: UserService,
   		private _noticiaService: NoticiaService,

	){
		this.title = 'homepage';
		this.identity =this._userService.getIdentity();
		this.token = this._userService.getToken();
	}

	ngOnInit(){
	console.log('El componente default.component ha sido cargado');
	 this.getAllNoticias(); 
	}
	getAllNoticias(){
		   this._route.params.forEach((params: Params)=>{
		   		let page = +params['page'];

		   		if (!page) {
		   			page = 1;
		   		}
		   		this._noticiaService.getNoticias(this.token,page).subscribe(
		   			response => {
		   				if (response.status == 'success') {
		   					this.noticias = response.data;

		   					console.log(this.noticias);
		   				}
		   			},
		   			error =>{
		   				console.log(<any>error);
		   			}
		   			);
		   });
	}
}