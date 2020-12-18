import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  loginForm=new FormGroup({
    username:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)])
  })
  /*get username(){
    return this.loginForm.get('username');
  }
  get password(){
    return this.loginForm.get('password');
  }*/
  signIn(){
    console.log(this.loginForm.value);
  }
}
