import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numb: number = 19;

  handleCount(value: number){
    
    this.numb = value;
    
  }

  handleDis(value: number){
    this.numb = value;
  }
}
