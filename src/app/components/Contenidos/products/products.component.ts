import { Component } from '@angular/core';
import { products } from '../../../interfaces/products';
import { AddProductsService } from '../../../Services/products.service'
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class GetProductsComponent {
  products: products[] = [];

  constructor(private AddProductsService: AddProductsService) { };

  ngOnInit(): void {
    this.products = this.AddProductsService.datosCompartidos();
  }
}