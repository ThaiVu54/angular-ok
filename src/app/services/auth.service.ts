import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogin: boolean = true;
constructor() { }

// giup nhan biet da dang nhap hay chua
isAuthenticated(){
  const promise = new Promise<boolean>((resolve, reject) =>{
    setTimeout(() =>resolve(this.isLogin),800);
  })
  return promise;
}

login(){
  this.isLogin = true;
}
logout(){
  this.isLogin = false;
}
}
