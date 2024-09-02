import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { ThemeSerService } from '../theme-ser.service';
import { PracticeComponent } from "../practice.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [PracticeComponent,CommonModule],
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.scss'
})
export class ThemeComponent {

    @Output() dataEvent:EventEmitter<string> = new EventEmitter<string>
    @Input() receviedData:any[]=[];

     public childData: string = "Hello from Child!";
  static childData: string;
  // static childData: (e: string) => void;

    ngOnInit(){
      console.log("receviedData",this.receviedData)
    }
    sanddata(){

      this.dataEvent.emit('hello this is child component')
    }
    }

  