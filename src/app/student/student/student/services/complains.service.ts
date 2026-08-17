import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class ComplainsService {

 BASE_URL = `http://localhost:3000/complaints`

  constructor(private http : HttpClient) { }

  getallComplains():Observable<any>{
    return this.http.get<any>(this.BASE_URL)

  }

  addComplains(complain : any):Observable<any>{
    return this.http.post<any>(this.BASE_URL,complain)
    
  }




}
