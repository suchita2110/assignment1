import { Component } from '@angular/core';

@Component({
  selector: 'app-box-comp',
  templateUrl: './box-comp.component.html',
  styleUrls: ['./box-comp.component.css']
})
export class BoxCompComponent {
 handleBoxEvent(){
  alert("Box Clicked!")
 }
}
