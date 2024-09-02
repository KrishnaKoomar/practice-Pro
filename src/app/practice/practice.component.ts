import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, ElementRef, Input, input, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ThemeSerService } from './theme-ser.service';
import { MathematicsService } from '../services/mathematics.service';
import { ThemeComponent } from "./theme/theme.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-practice',
  standalone: true,
  imports: [HttpClientModule, ReactiveFormsModule, ThemeComponent, CommonModule],
  templateUrl: './practice.component.html',
  styleUrl: './practice.component.scss',
  providers:[ThemeSerService]
})
export class PracticeComponent {

  @ViewChild(ThemeComponent) childcomponenet = ThemeComponent;
  public data: string = '';

  constructor(private ser:ThemeSerService){}
  products = [
    { name: 'Laptop', category: 'Electronics', price: 80000, availability: 'In Stock' },
    { name: 'Phone', category: 'Electronics', price: 50000, availability: 'Out of Stock' },
    { name: 'Tablet', category: 'Electronics', price: 30000, availability: 'In Stock' },
    { name: 'Shoes', category: 'Footwear', price: 4000, availability: 'In Stock' },
    { name: 'Shirt', category: 'Clothing', price: 1500, availability: 'Out of Stock' },
    { name: 'Watch', category: 'Accessories', price: 12000, availability: 'In Stock' },
  ];

  ngAfterViewInit() {
    // Child component se data directly access karna without @Output and EventEmitter
    this.data = this.childcomponenet.childData;
  }

  ngOnInit() {
     this.SandMessage()
    //  console.log("parent",this.ParentData)
    const data = this.products.find((product: any) => {

      if (product.price > 40000 && product.category === 'Electronics' && product.availability === 'In Stock') {
        if (product) {
          product.price *= 1.2;
          product.availability = 'update'
        }
        return product


      }

    }
    )
    if (data) {
      console.log('data found')
    } else {
      console.log('no data found')
    }
    console.log("ree", data)


  }
  ParentData = this.products

  //  receiveddata(e:string){
  //   console.log("output",e)
  //  }

SandMessage(){
  const tres = this.ser.changeMessage('i am practice component')
  console.log("tres",tres);
}

}