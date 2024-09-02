import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { DynamicDBService } from '../services/dynamic-db.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dynamic',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  templateUrl: './dynamic.component.html',
  styleUrl: './dynamic.component.scss',
  providers:[DynamicDBService]
})
export class DynamicComponent {
  employees = [
    { name: 'John', age: 28, salary: 45000 },
    { name: 'Jane', age: 32, salary: 60000 },
    { name: 'Jim', age: 25, salary: 30000 },
    { name: 'Jill', age: 30, salary: 75000 }
  ];  

  ngOnInit(){
    
  }


}


