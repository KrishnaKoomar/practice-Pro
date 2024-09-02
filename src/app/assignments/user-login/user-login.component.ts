import { Component, NgModule } from '@angular/core';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FormsModule,ReactiveFormsModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.scss',
  providers:[UserService]
})
export class UserLoginComponent {
  
  userlogin!:FormGroup;

correctuser='ranjan';
correctpass=123;
  constructor(private fb:FormBuilder){}

  ngOnInit(){
    this.userlogin = this.fb.group({
      username:[''],
      password:['']
    })
  }

  onsave(data:any){
    console.log("result",data);
    if(data.username !== this.correctuser ){
      console.log("username is not correct",data);
      
    }else{
      console.log("username is correct",data);
      }
      if(data.password == this.correctpass){
        console.log("correct password",data)
      }
      else{
      console.log("password is not correct",data)
    }
      
    }
  }

