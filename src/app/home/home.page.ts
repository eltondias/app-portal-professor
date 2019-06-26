import { Component } from '@angular/core';
import { UtilProvider } from '../services/util';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  professor = JSON.parse(localStorage.getItem('professor'));

  constructor(
 
    private util: UtilProvider,
 
) { }




}


