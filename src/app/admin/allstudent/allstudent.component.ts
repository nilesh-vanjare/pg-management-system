import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../shared/shared/student.service';

import { CommonModule, NgIf } from '@angular/common';
import { StudentComponent } from "../../student/student/student/student.component";
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { TitleStrategy, RouterLink } from '@angular/router';
import { Form, FormBuilder, FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { validateHorizontalPosition, validateVerticalPosition } from '@angular/cdk/overlay';



@Component({
  selector: 'app-allstudent',
  imports: [CommonModule, DialogModule, ReactiveFormsModule,
    ButtonModule, RouterLink],
  templateUrl: './allstudent.component.html',
  styleUrl: './allstudent.component.scss'
})
export class AllstudentComponent implements OnInit {

   visible: boolean = false;
   isEdit : boolean = true
   isEditMode = false;
   studentForm  !: any

studentArray: any[] = [];
   
  constructor(private student  : StudentService, private fb : FormBuilder){}

  ngOnInit(): void {
  this.getAll()

  this.studentForm = this.fb.group({
    name : [null,Validators.required],
    lastname : [null,Validators.required],
    contact : [null,Validators.required],
    sharing : [null,Validators.required],
    dateofBirth : [null,Validators.required],
    email : [null,Validators.required],
    PermanentAddress : [null,Validators.required ],
    State : [null,Validators.required],
    RoomNumber : [null,Validators.required]


  })
  
    
  }

  getAll(){
      this.student.getStudent().subscribe({
      next : data =>{
        this.studentArray = data
        console.log(this.studentArray);
        
      },error : err =>{
        console.log(err);
        
      }
    })
  }


  
   deleteStudent(student: any) {

  if (confirm('Are you sure you want to delete this student?')) {

    this.student.deleteStudent(student.id).subscribe({
      next: () => {
        alert('Student Deleted Successfully');

        // Student list refresh
        this.getAll()
        
      },
      error: (err) => {
        console.log(err);
      }
    });

  }
}
   

showDialog(){
  this.visible = true;
  this.isEditMode = false;

  this.studentForm.reset();


}

StdSubmit(){
 
  if(this.isEditMode === true){
    this.updateStudent()
  }else{

  if(this.studentForm.valid){
    let val = this.studentForm.value
    this.student.addStudent(val).subscribe({
      next : data =>{
     
        console.log(data);
        this.getAll();      // table refresh
          this.visible = false;   // dialog close
          this.studentForm.reset();
        
      },error : err =>{
        console.log(err);
        
      }
    })
  }}
}

get f() { 
  return this.studentForm.controls;
} 

selectedStudentId: string = '';

editStudent(student : any){
   this.isEditMode = true;

  this.selectedStudentId = student.id;
  this.studentForm.patchValue({
    
    name : student.name,
     lastname: student.lastname,
    contact: student.contact,
    sharing: student.sharing,
    dateofBirth: student.dateofBirth,
    email: student.email,
    PermanentAddress: student.PermanentAddress,
    State: student.State,
    RoomNumber: student.RoomNumber
     
  })
   this.visible = true;



}
  

updateStudent(){
  this.isEditMode = false;
  
 this.student.updateStudent(this.selectedStudentId,this.studentForm.value).subscribe({
  next : data =>{

      this.getAll();      // table refresh
          this.visible = false;   // dialog close
          this.studentForm.reset();

  },error : err =>{
    console.log(err);
    
  }
  
 })
}

    
}


 


