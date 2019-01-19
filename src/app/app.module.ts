
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import{ routing, appRoutingProviders } from './app.routing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import{ LoginComponent } from './components/login.component';
import{ RegisterComponent } from './components/register.component';
import{ DefaultComponent } from './components/default.component';
import{ UserEditComponent } from './components/user.edit.component';
import{ NoticiaNewComponent } from './components/noticia.new.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DefaultComponent,
    UserEditComponent,
    NoticiaNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    routing,
    HttpModule
  ],
  providers: [
   appRoutingProviders
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
