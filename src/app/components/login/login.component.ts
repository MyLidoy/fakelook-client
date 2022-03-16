import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/IUser';
import { UserService } from 'src/app/services/user.service';
import { validateEmail,validatePassword } from 'src/app/utils/validations';
// import { mainModule } from 'process';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mail!:string;
  password!:string;
  alertEmpty:boolean;
  alertMail:boolean;
  alertPassword:boolean;
  token!:string;
  userNotFound!:boolean;



  constructor(private userService:UserService) 
  { 
    this.alertEmpty=false;
    this.alertMail=false;
    this.alertPassword=false;
    this.userNotFound=false;
    this.mail="";
    this.password=""
  }

  ngOnInit(): void {
  }

  loginClicked()
  {

    if(validateEmail(this.mail)&& this.allInputsNotEmpty() && validatePassword(this.password))
    {
      this.alertEmpty=false;
      this.alertMail=false;
      this.alertPassword=false;
      let user ={} as IUser;
      user.password=this.password;
      user.mail=this.mail;
      this.userService.login(user).subscribe((result)=>{
      
      this.token=result.token;
      console.log(this.token)
      },(error) => 
      {
        
        if(error.status==500)
        {
          this.userNotFound=true;
        }


      });
      
    }
    else
    {
      
      if(!this.allInputsNotEmpty() )
      {
        this.alertEmpty=true;
      }
      else
      {
        if(!validateEmail(this.mail))
        {
          this.alertMail=true;
        }
        if(!validatePassword(this.password) )
        {
          this.alertPassword=true;
        }

      }
      


    }


  }
    CloseClicked(){
      
  }
 
  allInputsNotEmpty()
  {
    if(this.mail==""||this.password=="")
      return false;
    else 
      return true;
  }
 
  hideAlertMail()
  {
    this.alertEmpty=false;
    this.alertMail=false;
    this.userNotFound=false;

  }
  hideAlertPassword(){
    this.alertEmpty=false;
    this.alertPassword=false;
    this.userNotFound=false;

  }

}
