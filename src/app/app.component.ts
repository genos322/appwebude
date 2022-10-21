import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numb: number = 0;

  add(){
    this.numb++;
  }
  
  rest(){
    this.numb--;
  }
 
}
