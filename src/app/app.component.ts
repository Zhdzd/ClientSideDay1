import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Day 1 Workshop';
  myNumber: number;
    constructor(){
      this.myNumber= 123;
    }

}
