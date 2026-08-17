import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { NoticeComponent } from './student/notice/notice.component';
import { ComplainComponent } from './student/complain/complain.component';
import { StudentLayoutComponent } from './student/student-layout/student-layout.component';
import { StudentDashboardComponent } from './student/student-layout/student-dashboard/student-dashboard.component';

const routes: Routes = [
  // {path : 'std', component : StudentComponent},
  // {path : 'complains',component : ComplainComponent},
  // {path : 'notice', component : NoticeComponent}

  {path : '',component:StudentLayoutComponent,
    children :[
      {path : '',redirectTo : 'student',
        pathMatch : 'full'
      },
      {path : '',component: StudentDashboardComponent},
      {path : 'std', component : StudentComponent},
  {path : 'complains',component : ComplainComponent},
   {path : 'notice', component : NoticeComponent}

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
