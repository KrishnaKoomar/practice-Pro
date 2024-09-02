import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, MinLengthValidator, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-nominee-deatils',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './nominee-deatils.component.html',
  styleUrl: './nominee-deatils.component.scss'
})
export class NomineeDeatilsComponent {

  NomineeDetails!:FormGroup

  constructor(private fb:FormBuilder){
    
  }

  ngOnInit(){
    this.NomineeDetails=this.fb.group({
      Type:[""],
      ReLation:[""],
      Name:[""],
      Percentage:[""],
      Address:[""],
      Action:[""],
      Textbox3:["",[Validators.required,Validators.minLength(8),Validators.maxLength(14)]],
      Textbox4:["",],
    })

    
  }
      get percentageValue(){
      return this.NomineeDetails.get('Textbox4')?.value;
      
      }

      OnClick(){
        console.log( this.percentageValue);
      }
            
}
