import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent {
 dynamicForm: FormGroup;
i: any;

  constructor(private fb: FormBuilder) {
    this.dynamicForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email], ],
      addresses: this.fb.array([this.createAddress()])
    });
  }
      
  createAddress():FormGroup{
    return this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      zipcode: ['', [Validators.required]]
    });
  }

  get addresses():FormArray{
    return this.dynamicForm.get('addresses') as FormArray;
  }
  // Create a new address FormGroup
  submit(){

  }
}

