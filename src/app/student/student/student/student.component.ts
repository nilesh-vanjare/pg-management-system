import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../shared/shared/student.service';

import { CommonModule, NgIf } from '@angular/common';


@Component({
  selector: 'app-student',
  imports: [CommonModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export class StudentComponent implements OnInit {
   
studentArray: any[] = [];
   
  constructor(private student  : StudentService){}

  ngOnInit(): void {
    this.student.getStudent().subscribe({
      next : data =>{
        this.studentArray = data
        console.log(this.studentArray);
        
      },error : err =>{
        console.log(err);
        
      }
    })
    
  }

}
