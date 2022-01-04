import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //mieu ta lien ket toi child thong tin cua form trong template
  //decurator
  @ViewChild('loginForm')
  loginForm!: NgForm;

  onSubmit(){
    if(!this.loginForm.valid){
      console.log('invalid data');
      alert('đăng nhập không thành công')
      return;
    }
    console.log(this.loginForm.value);
    alert('đăng nhập thành công')
  }
}
