import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllstudentComponent } from '../allstudent/allstudent.component';
import { ComplainComponent } from '../../student/student/student/complain/complain.component';
import { ComplainsComponent } from './complains/complains.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from '../../shared/shared/gaurd/auth.guard';
import { StudentDetailsComponent } from './student-details/student-details.component';

const routes: Routes = [
 
 {path : '',component : AdminLayoutComponent,
  

  children :[
    
    {path : '',redirectTo :'dashboard' ,
      pathMatch : 'full'
    },
    {
path:'da',
component:DashboardComponent
},

 {path : 'std' , component : AllstudentComponent},
  {path : 'complain',component : ComplainsComponent},
  {path : 'std/:id',component : StudentDetailsComponent}

  ]
 }


 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
