import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth.service';

export const authGuard: CanActivateFn = (route, state) => {

const authservice = inject(AuthService)
const router = inject(Router)

const token = localStorage.getItem('token')

if(authservice.getToken()){
  return true

}
router.navigate(['']);

  return false;


};
