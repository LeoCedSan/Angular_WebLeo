import { Component } from '@angular/core';
import { products } from '../../../interfaces/products';
import { AddProductsService } from '../../../Services/products.service';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-form-products',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-products.component.html',
  styleUrl: './form-products.component.css'
})


export class SendProductsComponent {
  constructor(private addProductsService: AddProductsService) { }

  products: products[] = [];

  productForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    description: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    price: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?$/),
      Validators.min(0.01),
      Validators.max(9999.99)
    ]),
    categoria: new FormControl('', [Validators.required, ]),
    image: new FormControl('', [Validators.required, ]),
    onSale: new FormControl(false)
  });

  nameValue: string = '';
  descriptionValue: string = '';
  priceValue: number = 0;
  categoriaValue: string = '';
  onSaleValue: boolean = false;
  imageValue: string = '';


  onSubmit() {
    this.products.push({
      id: this.products.length + 1,
      name: this.nameValue,
      description: this.descriptionValue,
      price: this.priceValue,
      categoria: this.categoriaValue,
      image: this.imageValue,
      onSale: this.onSaleValue
    });
    this.sendProductsSignal();
    this.productForm.reset();
 }

  sendProductsSignal() {
    this.addProductsService.datosCompartidos.set(this.products);
  }

  ngOnInit(): void {
    this.products = this.addProductsService.datosCompartidos();
  }

  onImageSelected(event: any) { 
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.imageValue = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

}