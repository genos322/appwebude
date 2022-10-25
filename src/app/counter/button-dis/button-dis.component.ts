import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-dis',
  templateUrl: './button-dis.component.html',
  styleUrls: ['./button-dis.component.css']
})
export class ButtonDisComponent  {
  @Input()
  numb: number = 0;

  @Output()
  onDis: EventEmitter<number> = new EventEmitter();
  
  
  dis() {
    this.numb--;
    this.onDis.emit(this.numb);
    console.log(this.numb);
  }
}
