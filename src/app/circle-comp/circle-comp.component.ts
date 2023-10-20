import { Component } from '@angular/core';

@Component({
  selector: 'app-circle-comp',
  templateUrl: './circle-comp.component.html',
  styleUrls: ['./circle-comp.component.css']
})
export class CircleCompComponent {
handleCircleEvent(){
  alert("Circle Cliked!")
}
}
