import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-first-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './first-form.component.html',
  styleUrl: './first-form.component.scss'
})
export class FirstFormComponent {

     myform!:FormGroup;
     NotAllowedName!:["Rajesh","Ranjan"]

     constructor( private fb:FormBuilder){}

     ngOnInit( ){
      this.myform= this.fb.group({
        Fname: ["",Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(8)])],
        Lname : [" ",[Validators.required,this.NaName.bind(this)]],
         Id : [""],
         Rollno : [""],
        })    
           
          // topic ====> value Change
        // this.myform.get('Fname')?.valueChanges.subscribe(FirstName =>{
        //   console.log("Fname :"+FirstName);
        // })

         let array= new FormArray([
          new FormControl('chandan'),
          new FormControl('',Validators.required),

          
        ])
        console.log(array.value);


     }

     register(){
      console.log(this.myform.value);
      console.log(this.myform.valid);

      console.log(this.myform.get('Fname')?.value);
      

     }

     reset(){
      this.myform.reset({
        Fname:this.myform.get('Fname')?.value,
      });
     }
        
     NaName(control:FormControl){
      if (this.NotAllowedName.indexOf(control.value) !== -1) {
        return {'nameIsNotAllowed' :true}
      }
        return null;       
      
     }

}
