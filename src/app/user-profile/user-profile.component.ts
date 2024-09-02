import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChildComponent } from "./child/child.component";

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, ChildComponent],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {


  
  
  users = [
    { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com' },
    { id: 3, name: 'Mike Johnson', age: 40, email: 'mike@example.com' },
    { id: 4, name: 'Emily Davis', age: 35, email: 'emily@example.com' }
  ];
  ParentMessage:any=this.users
  // userName: string = 'John Doe';
  
  // // Default profile image URL
  // profileImage: string = 'assets/view-3d-businessman.jpg';
    
  // UserData(){
  //   this.userName='Rohit'
  //   this.profileImage='assets/buildingHR.jpg'
  // }  

     counter:number=0

     increment(){
      
       this.counter++
      
     }

     decrement(){
      this.counter--
     }
}
