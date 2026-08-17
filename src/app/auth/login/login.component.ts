import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AuthService } from '../../shared/shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [  MatCardModule,
  MatInputModule, ReactiveFormsModule,
  MatButtonModule ,MatCardModule,MatSelectModule,
MatFormFieldModule,
MatInputModule,
MatButtonModule,
MatIconModule,
MatDividerModule,
ReactiveFormsModule,MatIconModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
hide = true;
  loginForm : any
error: any;
  

  constructor(private fb : FormBuilder , private auth : AuthService, private router : Router){}

  ngOnInit(): void {

   this.loginForm = this.fb.group({
      username : [null,Validators.required],
      password : [null,Validators.required],
       role: ['', Validators.required],


    })
    
  }

  login(){
    if(this.loginForm.valid){
      let val = this.loginForm.value
      console.log(val);
         
      this.auth.logIn(val).subscribe({
        next : data =>{
    

  const fakeToken = "PG_TOKEN_" + Date.now();

          this.auth.saveToken(fakeToken);

           if (data.role === "ADMIN") {

    this.router.navigate(['/admin']);

  } else {

    this.router.navigate(['/student']);

  }
               

          this.loginForm.reset();
      
            
          },error : err =>{
            console.log(err);
            
          }
        })
          
        }
    

      
    }


  }
  


