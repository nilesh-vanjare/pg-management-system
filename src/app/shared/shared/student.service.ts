import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  BASE_URL = `http://localhost:3000/student`

  constructor(private http : HttpClient) { }

  getStudent():Observable<any>{
    return this.http.get<any>(this.BASE_URL)
  }

  addStudent(student : any):Observable<any> {
    return this.http.post<any>(this.BASE_URL,student)

  }

  updateStudent(id : string, student : any):Observable<any>{
    return this.http.put<any>(`${this.BASE_URL}/${id}`,student)
  }
 
  deleteStudent(id : string):Observable<any>{
  let  deleteUrl = `${this.BASE_URL}/${id}`
    return this.http.delete(deleteUrl)
  }

  getSingleStudent(id : any):Observable<any>{
    return this.http.get(`${this.BASE_URL}/${id}`)

  }

}
