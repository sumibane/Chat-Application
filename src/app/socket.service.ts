import { Injectable } from '@angular/core';
//Angular Dependency Import
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
//3rd Party Dependency Import
import * as io from 'socket.io-client';


@Injectable({
  providedIn: 'root'
})
export class SocketService {
  //Variable Declaraitons
  private url = "https://chatapi.edwisor.com/api/v1/";
  private socket;

  constructor(public http:HttpClient) {
    //Create the connection
    this.socket = io(this.url);
   }

   //Events Listener
   //verifyUser event descirption
   public verifyUser = () =>{
     return Observable.create((observer)=>{
       this.socket.on("verifyUser",(data)=>{
         observer.next(data);
       });
     });
   }
   //online-user-list event
   public onlineUserList = () => {
     return Observable.create((observer)=>{
       this.socket.on("online-User-List",(userList)=>{
         observer.next(userList);
       });
     });
   }
   //disconnect event
   public disconectedSocket = () =>{
     return Observable.create((observer)=>{
       this.socket.on("disconnect",()=>{
         observer.next();
       });
     });
   }

   //Event Emitters
   //set-user event
   public setUser = (authToken) =>{
     this.socket.emit("set-user",authToken);
   }

   //Error Handler
   public handleError(err:HttpErrorResponse){
    let errorMessage="";
    if (err.error instanceof Error){
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is : ${err.error.message}`;
    }
    console.error(errorMessage);
    return Observable.throw(errorMessage);
  }
}