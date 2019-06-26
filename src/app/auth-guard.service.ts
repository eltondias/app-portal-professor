import { Injectable, EventEmitter } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
 

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  authEmitter = new EventEmitter();

  constructor(public router: Router) {}
  canActivate(): boolean {
    console.log('canActivate');
    const   professor = JSON.parse(localStorage.getItem('professor'));
    if (!professor) {
      this.router.navigate(['login']);
      // this.authEmitter.emit(false);
      return false;
    }
    // this.authEmitter.emit(true);
    return true;
  }
}