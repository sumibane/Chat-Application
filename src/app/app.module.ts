import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Modules and Components Import
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatModule } from './chat/chat.module';
import { UserModule } from './user/user.module';
import { ApplicationService } from './application.service';
import {SocketService} from './socket.service';
//Dependencies import
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//External Library Imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UserModule,
    ChatModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()      
  ],
  providers: [ApplicationService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
