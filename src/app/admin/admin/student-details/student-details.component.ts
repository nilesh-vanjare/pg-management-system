import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { StudentService } from '../../../shared/shared/student.service';
import { MatIcon } from "@angular/material/icon";
import { MatCard } from "@angular/material/card";
import { MatDivider } from "@angular/material/divider";

@Component({
  selector: 'app-student-details',
  imports: [MatIcon, MatCard, MatDivider, RouterLink],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.scss'
})
export class StudentDetailsComponent implements OnInit {

student!: any;

  studentID ! : string
studentDetails: any;

  constructor(private route : ActivatedRoute,private studentdetailserv : StudentService){}

  ngOnInit(): void {
    this.studentID = this.route.snapshot.params['id']
    if(this.studentID){
      this.studentdetailserv.getSingleStudent(this.studentID).subscribe({
        next : data =>{
          console.log(data);
          this.student = data
          
        },error : err =>{
          console.log(err);
          
        }
      })

    }
    

    
  }

}
