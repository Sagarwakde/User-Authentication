import { Injectable } from '@angular/core';
import { Login, signUp } from './data-types';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http:HttpClient, private router:Router) { }

  userSignUp(data:signUp ){
    console.log("service called")
    return this.http.post("http://localhost:3000/register",data)
  }

  userLogin(data:Login){
      console.log(data)
      return this.http.get(`http://localhost:3000/register?email=${data.email}&password=${data.password}`,{observe:'response'})
  }
}
