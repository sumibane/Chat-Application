import { Component, OnInit } from '@angular/core';
//Extra Imports
import {Router} from '@angular/router';
import { ApplicationService } from 'src/app/application.service';
//Third Party Imports
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //Global Declaration
  public email:any;
  public password:any;

  constructor(
    public toastr:ToastrService,
    public appService: ApplicationService,
    public router: Router,
    private cookieService: CookieService
  ) { }

  ngOnInit() {
  }
  
  //Set Navigation to Signup page for NavLink Item
  public signup:any = () => {
    this.router.navigate(['/signup'])
  }
  //
  public signInFunction:any = () =>{
    if(!this.email || !this.password){
      this.toastr.warning("Please provide appropriate input");
    } else{
      let data = {
        email:this.email,
        password: this.password,
      }
      this.appService.signinFunc(data).subscribe((apiResponse) => {
        if(apiResponse.status === 200){
          this.toastr.success("Login Successful");
          this.cookieService.set("authToken",apiResponse.authToken);
          this.cookieService.set("receivedId",apiResponse.data.userDetails.userId);
          this.cookieService.set("userName",
          apiResponse.data.userDetails.firstName+ " " +apiResponse.data.userDetails.lastName);
          this.appService.setLocalStorage(apiResponse.data.userDetails)
          this.router.navigate(['/chat']);
        } else{
          this.toastr.error("Some error occured: "+apiResponse.message);
        }
      },(err)=>{
        this.toastr.error(`${err} has occured`);
      })
    }
  }
}
