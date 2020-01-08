import { Component, OnInit } from '@angular/core';
//Angular Imports
import { SocketService } from './../../socket.service';
import { ApplicationService } from './../../application.service';
import { Router } from '@angular/router';
//3rd Party Imports
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css'],
  providers: [SocketService]
})
export class ChatBoxComponent implements OnInit {
  //Variable Declarations
  public authToken: any;
  public userInfo: any;
  public receviedId: any;
  public recevierName: any;
  public userLists: any[];
  public disconnectedSocket: boolean;

  constructor(
    public appService: ApplicationService,
    public socketService: SocketService,
    public router: Router,
    public toastr: ToastrService,
    private cookieService: CookieService
  ) { 
    //Initialize the values from cookies
    this.receviedId = cookieService.get("receivedId");
    this.recevierName = cookieService.get("userName");
  }

  ngOnInit() {
    this.authToken = this.cookieService.get('authToken');
    this.userInfo = this.appService.getLocalStorage();
    this.checkStatus();
    this.verifyUserConfirmation();
    this.getOnlineUserList();
  }

  //Check for corrupt Cookies
  public checkStatus: any = () => {
    if(this.authToken === "undefined" || this.authToken === '' || this.authToken === null){
      this.router.navigate(['/']);
      console.log("Cookies are corrupt, navigating to homepage");
      return false;
    } else {
      console.log("Cookies checked.");
      return true;
    }
  }
  //verifyUser event description
  public verifyUserConfirmation:any = () =>{
    this.socketService.verifyUser().subscribe((data)=>{
      this.disconnectedSocket = false;
      this.socketService.setUser(this.authToken);
      this.getOnlineUserList();
    });
  }
  //online-user-list event description
  public getOnlineUserList: any = () => {
    this.socketService.onlineUserList().subscribe((allUser)=>{
    this.userLists=[];
    for(let x in allUser){
      let temp = {
        'userId': x,
        'name': allUser[x],
        'unread': 0,
        'chatting': false
      };
      this.userLists.push(temp);
    }
    });
 }
}
