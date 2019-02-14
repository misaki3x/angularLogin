import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment'; // 追加
import { AngularFireModule } from '@angular/fire'; // 追加
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { Observable } from 'rxjs'; // 追加

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,AngularFireModule.initializeApp(environment.firebase)
  , AngularFirestoreModule
  // , AngularFireAuthModule 
   ],
  declarations: [ AppComponent, HelloComponent, HeaderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
