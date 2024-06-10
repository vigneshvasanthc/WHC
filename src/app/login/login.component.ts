import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group ({
      userName: ['', Validators.required],
      emailId: ['', Validators.required],
      password:['', Validators.required],
      mobileNumber: ['', Validators.required],
      corporateCode: ['']
    })
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  onSubmit() : void {
    if(this.loginForm.valid) {
      const { userName , password, emailId, mobileNumber } = this.loginForm.value;
      if(this.authService.login(userName, password, emailId, mobileNumber)) {
        this.router.navigate(['/dashboard']);
      }else {
        alert( 'Invalid userName , Email and Password');
      }
    } 
  }
}
