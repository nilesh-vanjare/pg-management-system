import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-auth',
  imports: [CommonModule, ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent implements OnInit {
allredyAccount : boolean = true
  loginForm ! : any;
  signForm ! : any;

  constructor(private fb : FormBuilder){}

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      name : [null,Validators.required],
      email : [null,Validators.required]
    })

    this.signForm = this.fb.group({
      name : [null,Validators.required],
      email : [null,Validators.required]
    })
    
  }

  OnLoginForm(){
    if(this.loginForm.Valid){
      let val = this.loginForm.value
    }

  }

  OnsignUp(){
    if(this.signForm.Valid){
      let val = this.signForm.value
    }

  }




}
