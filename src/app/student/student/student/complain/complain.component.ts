import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ComplainsService } from '../services/complains.service';

@Component({
  selector: 'app-complain',
  imports: [ReactiveFormsModule],
  templateUrl: './complain.component.html',
  styleUrl: './complain.component.scss'
})
export class ComplainComponent  implements OnInit {

  complaintForm !: FormGroup;

  complaintList : any[]=[]

  isEdit : boolean = false;
  selectId : string = ''

  constructor(private fb : FormBuilder, private complainservice : ComplainsService){}

  ngOnInit(): void {
    this.complaintForm = this.fb.group({
     complaintType: ['', Validators.required],
      title: ['', Validators.required],
      description : ['',Validators.required],
      roomNumber: ['', Validators.required],
      status: ['Pending']
         })

    
    
  }

  complainSubmit(){
    if(this.complaintForm.valid){
      let val = this.complaintForm.value;
      this.complainservice.addComplains(val).subscribe({
        next : data =>{
          console.log(data);
          
        },error : err =>{
        
        }
      })

    }
  }



}
