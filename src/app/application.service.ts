import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  //Global Declarations
  public url = "https://chatapi.edwisor.com/api/v1/";


  constructor(public http: HttpClient) { }
  //Signup Function Defination
  public signupFunc(data):Observable<any> {
    const params = new HttpParams()
    .set('firstName',data.firstName)
    .set('lastName', data.lastName)
    .set('email', data.email)
    .set('mobileNumber', data.mobileNumber)
    .set('password', data.password)
    .set('apiKey', data.apiKey)
    return this.http.post(`${this.url}users/signup`,params);
  }
  //Sign in Function Defination
  public signinFunc(data):Observable<any>{
    const params = new HttpParams()
    .set('email', data.email)
    .set('password', data.password);
    return this.http.post(`${this.url}users/login`,params);
  }
  //Error Handler
  public handleError(err:HttpErrorResponse){
    let errorMessage="";
    if (err.error instanceof Error){
      errorMessage = `An error occurred: ${err.error.message}`
    }
  }
  //Set Local Storage Information
  public setLocalStorage:any = (data:JSON) => {
    localStorage.setItem("userInfo",JSON.stringify(data));
  }
  //Get Information from Local Storage
  public getLocalStorage:any = () =>{
    return JSON.parse(localStorage.getItem("userInfor"));
  }
}
