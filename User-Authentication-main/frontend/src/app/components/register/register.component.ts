import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import {FormsModule, ReactiveFormsModule, Validator} from '@angular/forms'
import { Route, Router } from '@angular/router';
import { SignUpService } from 'src/app/services/sign-up.service';
import { signUp } from 'src/app/services/data-types';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  
  constructor(private signUp:SignUpService, private formBuilder: FormBuilder, private router:Router)
    {
        this.registerForm = formBuilder.group({
            // name: ["", Validators.required],
            
              // id:[''],
              firstName : ['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(10)])],
             lastName : ['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(10)])],
              email : ['',Validators.compose([Validators.required,Validators.email])],
              phone : ['',Validators.pattern('[- +()0-9]{10,12}')],
              password : ['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(10)])],

        
            
        });
    }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

    createNewTask(FormData:signUp):void{
      console.log("register clickeds")
      // console.log(FormData)
      this.signUp.userSignUp(FormData).subscribe((result)=>{
        if(result){
          this.router.navigate(['login'])
        }
      });

    }
  
  
}

