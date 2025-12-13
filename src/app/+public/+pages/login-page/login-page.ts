import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [FormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {
  router=inject(Router);
  loginForm:LoginForm={
    userName:'',
    password:'',
    keepMe:false
  };
  message:string='';
  check(){
    if (this.loginForm.userName=='admin' && this.loginForm.password=='admin') {
      sessionStorage.setItem('token','vhhvgcgyoo98i7ujkllkjht5trffuiol9oilolowsed');
      if(this.loginForm.keepMe==true){
        localStorage.setItem('token','vhhvgcgyoo98i7ujkllkjht5trffuiol9oilolowsed');
      }
      this.router.navigate(['/private']);
    } else {
      this.message='نام کاربری یا کلمه عبور صحیح نیست';
    }
  }
}
export interface LoginForm{
  userName:string;
  password:string;
  keepMe:boolean;
}
