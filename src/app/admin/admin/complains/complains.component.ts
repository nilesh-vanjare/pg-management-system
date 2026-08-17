import { Component, OnInit } from '@angular/core';
import { ComplainsService } from '../../../student/student/student/services/complains.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-complains',
  imports: [CommonModule],
  templateUrl: './complains.component.html',
  styleUrl: './complains.component.scss'
})
export class ComplainsComponent implements OnInit {

  complaintList ! : any[]
 
  constructor(private complainService : ComplainsService){}

  ngOnInit(): void {
    this.complainService.getallComplains().subscribe({
      next : data =>{
        console.log(data);
        this.complaintList = data
        
      },error : err =>{
        console.log(err);
        
      }
    })
    
  }
   
}
