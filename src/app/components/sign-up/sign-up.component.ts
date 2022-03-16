import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/IUser';
import { UserService } from 'src/app/services/user.service';
import { validateEmail,validateFullName,validatePassword } from 'src/app/utils/validations';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  mail!:string;
  password!:string;
  fullName!:string;
  address!:string;
  companyName!:string;
  birthDate!:Date;
  token!:string;
  alertEmpty:boolean;
  alertMail:boolean;
  alertPassword:boolean;
  alertName:boolean;
  mailExistInDB:boolean;


  constructor(private userService:UserService) 
  { 
    this.mail=="";
    this.password=="";
    this.fullName=="";
    this.address=="";
    this.companyName=="";
    this.alertEmpty=false;
    this.alertMail=false;
    this.alertPassword=false;
    this.alertName=false;
    this.mailExistInDB=false;

  }

  ngOnInit(): void {
  }

  SignUpClick()
  {
   
    if( this.allInputsNotEmpty() && validateEmail(this.mail) && validateFullName(this.fullName) && validatePassword(this.password))
    {
      this.alertEmpty=false;
      this.alertMail=false;
      this.alertPassword=false;
      this.alertName=false;
      this.mailExistInDB=false;
      let user ={} as IUser;
      user.mail=this.mail;
      user.password=this.password;
      user.name=this.fullName;
      user.address=this.address;
      user.companyName=this.companyName;
      user.birthDate=this.birthDate;
      console.log(user);
      this.userService.signUp(user).subscribe((result)=>{
        this.token=result.token;

      },(error)=>{
        this.mailExistInDB=true;
      })

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
        if(!validateFullName(this.fullName))
        {
          this.alertName=true;
        }

      }

    }

  }


  allInputsNotEmpty()
  {
    if(this.mail==""||this.password==""||this.fullName==""||this.address==""||this.companyName==""||this.birthDate==undefined)
      return false;
    else 
      return true;
  }
  hideAlertMail()
  {
    this.alertEmpty=false;
    this.alertMail=false;
    this.mailExistInDB=false;
    

  }
  hideAlertPassword(){
    this.alertEmpty=false;
    this.alertPassword=false;
    

  }
  hideAlertName(){
    this.alertEmpty=false;
    this.alertName=false;
  }
  hideAlertEmpty(){
    this.alertEmpty=false;
  }




}
