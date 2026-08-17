import { Routes } from '@angular/router';
import { AuthComponent } from './shared/auth/auth.component';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
     { path: '' ,component : LoginComponent },

    {path : 'admin' , loadChildren : () => import("./admin/admin/admin.module").then(m  => m.AdminModule) },

    {path : 'student', loadChildren : () => import('./student/student/student.module').then( m => m.StudentModule)},

{path : '**',
    redirectTo : ''
}

];
