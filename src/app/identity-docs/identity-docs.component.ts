import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-identity-docs',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,],
  templateUrl: './identity-docs.component.html',
  styleUrl: './identity-docs.component.scss'
})
export class IdentityDocsComponent {

  isVisible:boolean=false;



  IdentityDocs!:FormGroup


  constructor(private fb:FormBuilder){}

   ngOnInit(){
    this.IdentityDocs=this.fb.group({
      DocumentType:["0"],
      DocumentNumber:[""],
      ExpiryDate:[""],
    })

          
            this.IdentityDocs.controls['DocumentType']?.valueChanges.subscribe (val=>{
                 
                if(val == 0){
                  this.isVisible=false
                }

                else
                     this.isVisible=true


           })
            

           }

           
       

   }
       
   




