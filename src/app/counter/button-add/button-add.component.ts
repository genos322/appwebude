import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-add',
  templateUrl: './button-add.component.html',
  styleUrls: ['./button-add.component.css']
})
export class ButtonAddComponent {
  // @Input() numb: number = 10;
  @Input()
   numb: number = 0;

  @Output() 
  onAdd: EventEmitter<number> = new EventEmitter()
  
  
  add(){
    this.numb ++;
    this.onAdd.emit(this.numb);
    console.log(this.numb);
  }
 

}
