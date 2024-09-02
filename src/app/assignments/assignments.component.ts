import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-assignments',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.scss',
})
export class AssignmentsComponent {
  AssignmentsForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.AssignmentsForm = this.fb.group({

      checkbox1: [""],
      checkbox2: [""],
      checkbox3: [""],
      checkbox4: [""],
      checkbox5: [""],
      checkbox6: [""],
      Agency: ['1'],
      Department: ['11'],
      Designation: ['21'],
      Grade: ['31'],
      Location: ['41'],
      State: ['51'],
      date1:[""],
      date2:[""],
      date3:[""],
      date4:[""],
      date5:[""],
      date6:[""],
      
    });

    this.AssignmentsForm.get('Agency')?.disable();
    this.AssignmentsForm.get('date1')?.disable();
   
    this.AssignmentsForm.get('Department')?.disable();
    this.AssignmentsForm.get('date2')?.disable();
    this.AssignmentsForm.get('Designation')?.disable();
    this.AssignmentsForm.get('date3')?.disable();
    this.AssignmentsForm.get('Grade')?.disable();
    this.AssignmentsForm.get('date4')?.disable();
    this.AssignmentsForm.get('Location')?.disable();
    this.AssignmentsForm.get('date5')?.disable();
    this.AssignmentsForm.get('State')?.disable();
    this.AssignmentsForm.get('date6')?.disable();

  }

  get checkBoxValue1() {
    return this.AssignmentsForm.get('checkbox1')?.value ||
    this.AssignmentsForm.get('date1')?.value;
  }  
  
  get checkBoxValue2() {
    return this.AssignmentsForm.get('checkbox2')?.value ||
     this.AssignmentsForm.get('date2')?.value;
  }

  get checkBoxValue3() {
    return this.AssignmentsForm.get('checkbox3')?.value ||
     this.AssignmentsForm.get('date3')?.value;
  }

  get checkBoxValue4() {
    return this.AssignmentsForm.get('checkbox4')?.value ||
     this.AssignmentsForm.get('date4')?.value;
  }

  get checkBoxValue5() {
    return this.AssignmentsForm.get('checkbox5')?.value ||
     this.AssignmentsForm.get('date5')?.value;
  }

  get checkBoxValue6() {
    return this.AssignmentsForm.get('checkbox6')?.value ||
     this.AssignmentsForm.get('date6')?.value;
  }

  onclick1() {
    console.log('data1', this.checkBoxValue1);
    // console.log('data2', this.checkBoxValue2);
    if (this.checkBoxValue1 == true) {
      this.AssignmentsForm.get('Agency')?.enable();
      this.AssignmentsForm.get('date1')?.enable();
    } else {
      this.AssignmentsForm.get('Agency')?.disable();
      this.AssignmentsForm.get('date1')?.disable();

    }
     }

     onclick2() {
      console.log('data', this.checkBoxValue1);
      console.log('data2', this.checkBoxValue2);
      if (this.checkBoxValue2 == true) {
        this.AssignmentsForm.get('Department')?.enable();
        this.AssignmentsForm.get('date2')?.enable();
      } else {
        this.AssignmentsForm.get('Department')?.disable();
        this.AssignmentsForm.get('date2')?.disable();
  
      }
       }

       onclick3() {
        console.log('data', this.checkBoxValue1);
        console.log('data2', this.checkBoxValue2);
        if (this.checkBoxValue3 == true) {
          this.AssignmentsForm.get('Designation')?.enable();
          this.AssignmentsForm.get('date3')?.enable();
        } else {
          this.AssignmentsForm.get('Designation')?.disable();
          this.AssignmentsForm.get('date3')?.disable();
    
        }
         }

         onclick4() {
          console.log('data', this.checkBoxValue1);
          console.log('data2', this.checkBoxValue2);
          if (this.checkBoxValue4 == true) {
            this.AssignmentsForm.get('Grade')?.enable();
            this.AssignmentsForm.get('date4')?.enable();
          } else {
            this.AssignmentsForm.get('Grade')?.disable();
            this.AssignmentsForm.get('date4')?.disable();
      
          }
           }

           onclick5() {
            console.log('data', this.checkBoxValue1);
            console.log('data2', this.checkBoxValue2);
            if (this.checkBoxValue5 == true) {
              this.AssignmentsForm.get('Location')?.enable();
              this.AssignmentsForm.get('date5')?.enable();
            } else {
              this.AssignmentsForm.get('Location')?.disable();
              this.AssignmentsForm.get('date5')?.disable();
        
            }
             }

             onclick6() {
              console.log('data', this.checkBoxValue1);
              console.log('data2', this.checkBoxValue2);
              if (this.checkBoxValue6 == true) {
                this.AssignmentsForm.get('State')?.enable();
                this.AssignmentsForm.get('date6')?.enable();
              } else {
                this.AssignmentsForm.get('State')?.disable();
                this.AssignmentsForm.get('date6')?.disable();
          
              }
               }

               save(){
                console.log(this.AssignmentsForm.value);
                 
               }
}
