import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLinkActive,RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
     
  products = [
    { id: 1, name: 'Laptop' },
    { id: 2, name: 'Tab' },
    { id: 3, name: 'Phone' }
  ];


  // constructor(private router: Router) { }

  // viewProductDetail(id: number): void {
  //   this.router.navigate(['/product', id]);
  // }
}
