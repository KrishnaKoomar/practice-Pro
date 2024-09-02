import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {


ProductDetailForm!:FormGroup
  constructor(private route:ActivatedRoute , private fb:FormBuilder){
    this.ProductDetailForm = this.fb.group({
      Ram:['',Validators.required],
      InternalMemory:['',Validators.required],
      Display:['']

    })
  }

     AddData=[
      {id:'1' , Ram:'16GB' ,InternalMemory:'128GB' , Display:'Hd Display' },
      {id:'2' , Ram:'8GB' ,InternalMemory:'60GB' , Display:'Hd Display' },
      {id:'3' , Ram:'6GB' ,InternalMemory:'12GB' , Display:'Hd Display' }
    ]
  

  ngOnInit(){
    
    const getId =this.route.snapshot.paramMap.get('id') 
    console.log("getId",getId);

    const pro = this.AddData.find(item => item.id ===getId);
    console.log("data",pro)
    this.ProductDetailForm.patchValue({
      Ram:pro?.Ram, Display:pro?.Display , InternalMemory:pro?.InternalMemory
    })

    
  }


  submit() {
    if(this.ProductDetailForm.valid){

    }else{
      if(this.ProductDetailForm.controls['Ram']){
        alert("Ram is Required!!");
        
      }else{
      alert('plz fill your Form First!!')
      }
      console.log(this.ProductDetailForm.value)
    }
    }
     
     
  

} 
