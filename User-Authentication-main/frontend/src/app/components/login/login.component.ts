import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule, FormsModule, Validator } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/services/data-types';
import { SignUpService } from 'src/app/services/sign-up.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  authError:string = "";
  constructor(private formBuilder: FormBuilder, private signUp:SignUpService, private router:Router) {
    this.loginForm = formBuilder.group({
      email : ['',Validators.compose([Validators.required,Validators.email])],
      password : ['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(10)])],

    })
   }

  ngOnInit(): void {
  }

  userLogin(FormData:Login):void{
    // console.log(FormData)
    this.signUp.userLogin(FormData).subscribe((result:any)=>{
      console.log(result)
      if(result && result.body &&result.body.length){
        console.log("user loged in")
        this.router.navigate(['dashboard'])
      }
      else{
        console.log('login failed');
        this.authError = "email or password is incorrect"
      }
    });
  }
}
