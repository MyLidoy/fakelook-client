import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { IUser } from 'src/app/interfaces/IUser';
import { UserService } from 'src/app/services/user.service';
import { validateEmail,validatePassword } from 'src/app/utils/validations';
import { Router ,NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  mail!:string;
  password!:string;
  alertEmpty:boolean;
  alertMail:boolean;
  alertPassword:boolean;
  confirmpassword:string;
  userNotFound!:boolean;
  user!:IUser;
  alertConfirmPassword:boolean;
  passwordChanged:boolean;

  constructor(private userService:UserService,private router: Router) 
  { 
    this.alertEmpty=false;
    this.alertMail=false;
    this.alertPassword=false;
    this.userNotFound=false;
    this.mail="";
    this.password=""
    this.confirmpassword=""
    this.alertConfirmPassword=false;
    this.passwordChanged=false;

  }

  ngOnInit(): void {
  }
  loginClicked()
  {

    if(validateEmail(this.mail)&& this.allInputsNotEmpty() && validatePassword(this.password) && this.validateConfirmPassword())
    {
      this.alertEmpty=false;
      this.alertMail=false;
      this.alertPassword=false;
      this.alertConfirmPassword=false;
      let user ={} as IUser;
      user.password=this.password;
      user.mail=this.mail;
      this.userService.forgetPassword(user).subscribe((result)=>{
      
        this.passwordChanged=true;
        this.router.navigate(['/']);

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
        if(!this.validateConfirmPassword())
        {
          this.alertConfirmPassword=true;
        }

      }
      


    }


  }
    CloseClicked(){
      
  }
 
  allInputsNotEmpty()
  {
    if(this.mail==""||this.password==""||this.confirmpassword=="")
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
  hideAlertConfirmPassword(){
    this.alertEmpty=false;
    this.alertConfirmPassword=false;
    
  }
  validateConfirmPassword(){
    if(this.password==this.confirmpassword)
      return true;
    else
      return false;
  }

}
