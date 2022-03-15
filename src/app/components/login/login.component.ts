import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/IUser';
import { UserService } from 'src/app/services/user.service';
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



  constructor(private userService:UserService) 
  { 
    this.alertEmpty=false;
    this.alertMail=false;
    this.alertPassword=false;
  }

  ngOnInit(): void {
  }

  loginClicked()
  {

    // let user ={} as IUser;
    // if(this.allInputsNotEmpty())
    // {
    //   if(this.validateEmail() )
    //   {
    //     user.mail=this.mail;
    //     if (this.validatePassword())
    //     {
    //       this.alertEmpty=false;
    //       this.alertMail=false;
    //       this.alertPassword=false;
    //         user.password=this.password;
    //         this.userService.login(user).subscribe((result)=>{
    //           console.log(result);

    //         },(error) => console.log(error))
    //     }
    //     else{
    //       this.alertPassword=true;

    //     }
      

    //   }
    //   else
    //   {
    //     this.alertMail=true;

    //   }

    // }
    // else
    // {
    //   this.alertEmpty=true;

    // }

    if(this.validateEmail()&& this.allInputsNotEmpty()  &&this.validatePassword())
    {
      this.alertEmpty=false;
      this.alertMail=false;
      this.alertPassword=false;
      let user ={} as IUser;
      user.password=this.password;
      user.mail=this.mail;
      this.userService.login(user).subscribe((result)=>{
      console.log(result);
      },(error) => console.log(error))
      
    }
    else
    {
      
      if(!this.allInputsNotEmpty() )
      {
        this.alertEmpty=true;
      }
      else
      {
        if(!this.validateEmail())
        {
          this.alertMail=true;
        }
        if(!this.validatePassword() )
        {
          this.alertPassword=true;
        }

      }
      


    }


  }
    CloseClicked(){
      
  }
    validateEmail() 
  {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.mail))
    {
      return (true)
    }
    else
    {
      return (false)
    }
      
  }
  allInputsNotEmpty()
  {
    if(this.mail==undefined||this.password==undefined)
      return false;
    else 
      return true;
  }
  validatePassword()
  {
    if (this.password.length<10)
      return false;
    else 
      return true;
  }
  hideAlertMail()
  {
    this.alertEmpty=false;
    this.alertMail=false;

  }
  hideAlertPassword(){
    this.alertEmpty=false;
    this.alertPassword=false;

  }

}
