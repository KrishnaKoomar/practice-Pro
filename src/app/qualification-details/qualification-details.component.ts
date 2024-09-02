import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-qualification-details',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,HttpClientModule],
  templateUrl: './qualification-details.component.html',
  styleUrl: './qualification-details.component.scss'
})
export class QualificationDetailsComponent {

  // Url='https://ranjan-990ab-default-rtdb.firebaseio.com/data.json';

  // Users:any=[
  //   { QualificationType:'Graduation',InstituteSchoolName:'Dav'},
  // ];

      
  // Qualificationform!:FormGroup

  // constructor(private fb:FormBuilder,private http:HttpClient){}

  // ngOnInit(){
  //   this.Qualificationform=this.fb.group({
  //       QualificationType:["",Validators.required],
  //       UniversityBoardName:[],
  //       FromDate:[],
  //       Qualification:["",],
  //       InstituteSchoolName:["",Validators.required],
  //       ToDate:[],
  //       Stream:[],
  //       Percentage:["",Validators.required],
  //       DateOfPassing:[]

  //       })
  // }
  // Save(){
  //      if(this.Qualificationform.invalid){
  //       this.Qualificationform.markAllAsTouched()
  //       console.log('Form is Invalid')
    
  //      }

  //   else{
  //     console.log( this.Qualificationform.value);
  //   }

  //   this.Users.push(this.Qualificationform.value);
  //   this.http.post(this.Url,this.Qualificationform.value).subscribe((res)=>{
  //     console.log("post",res);
  //   })
       
  // }

  show(){
    console.log(localStorage);
  }

}

