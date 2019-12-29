import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatBoxComponent } from './chat-box/chat-box.component';
//Dependency Imports
import { Routes, RouterModule, Router } from '@angular/router';

const routes: Routes = [
  {path:"chat", component:ChatBoxComponent}
]
@NgModule({
  declarations: [ChatBoxComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ChatModule { }
