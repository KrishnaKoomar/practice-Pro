import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
   
  @Input() receviedData:any=''
  ngOnInit(){
    console.log("receviedData",this.receviedData)
  }
}
