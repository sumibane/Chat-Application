import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatBoxComponent } from './chat-box/chat-box.component';
//Dependency Imports
import { Routes, RouterModule, Router } from '@angular/router';
//3rd Party Imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
const routes: Routes = [
  {path:"chat", component:ChatBoxComponent}
]
@NgModule({
  declarations: [ChatBoxComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ]
})
export class ChatModule { }
