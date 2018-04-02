import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

export var firebaseConfig = {
  apiKey: "AIzaSyAtYC3nCh0tmwr5JUZXX3RNm91m0mmEBzo",
  authDomain: "chat-app-867b6.firebaseapp.com",
  databaseURL: "https://chat-app-867b6.firebaseio.com",
  projectId: "chat-app-867b6",
  storageBucket: "chat-app-867b6.appspot.com",
  messagingSenderId: "819134768797"
};



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
