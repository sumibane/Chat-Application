import { Component, OnInit } from '@angular/core';
//Extra Imports
import {Router} from '@angular/router';
import { ApplicationService } from 'src/app/application.service';
//Third Party Imports
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  //Variable Declarations
  public firstName: any;
  public lastName: any;
  public mobileNumber: any;
  public email: any;
  public password: any;
  public apiKey: any;

  constructor(
    public toastr:ToastrService,
    public appService: ApplicationService,
    public router: Router
  )  { }

  ngOnInit() {
  }
  //Set Navigation to Login page for NavLink Item
  public signin:any = () => {
    this.router.navigate(['/']);
  }
  //Sign-Up Function
  public signUpFunction:any = () => {
    if(!this.firstName || !this.lastName || !this.mobileNumber || !this.email || !this.password || !this.apiKey){
      this.toastr.warning("All fields are mandatory, kindly fill in with appropriate details");
    } else {
      let data = {
        firstName:this.firstName,
        lastName:this.lastName,
        mobileNumber:this.mobileNumber,
        email:this.email,
        password:this.password,
        apiKey:this.apiKey
      }
      
      this.appService.signupFunc(data).subscribe((apiResponse)=>{
        if(apiResponse.status === 200){
          this.toastr.success("Sign-Up Successful");
          setTimeout(()=>{
            this.signin();
          },2000);
        } else{
          this.toastr.error("An error Occured:"+apiResponse.message);
        }
      }), (err) => {
        this.toastr.error("Error: "+err);
      }
    }
  }
}
