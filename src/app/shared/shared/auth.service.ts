import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  userLogin : boolean = false;

  Auth_url : string = `http://localhost:3000/login`;

  constructor(private http : HttpClient,) { }

  logIn(obj : any): Observable<any>{
    let  LoginUrl = this.Auth_url
   return this.http.post(LoginUrl,obj)

  }
  
  // signUp(obj : any) : Observable<any>{
  //   let signUrl = `${this.Auth_url}`
  //   return this.http.post(signUrl,obj)
  // }
  
  saveToken(token : string){
    localStorage.setItem("token",token)
  }


    getUserRole() {
    return localStorage.getItem('userRole')


  }

    saveUserRole(userRole: string) {
    localStorage.setItem('userRole', userRole)

  }
 
    getToken(): boolean {
    return !!localStorage.getItem('token')

  }

}
