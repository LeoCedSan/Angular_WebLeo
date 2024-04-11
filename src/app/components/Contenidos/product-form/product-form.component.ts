import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  imports: [ReactiveFormsModule, CommonModule],
  standalone: true,
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
  
})
export class ProductFormComponent implements OnInit {
  productForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  private buildForm() {
    this.productForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      precio: ['', [Validators.required, Validators.min(0)]],
      descripcion: ['', Validators.maxLength(100)],
      categoria: ['', Validators.required],
      disponible: [false],
      imagen: [''],
    });
  }

  ngOnInit(): void {}

  save(event: Event) {
    event.preventDefault();
    if (this.productForm.valid) {
      const value = this.productForm.value;
      console.log(value);
    } else {
      this.productForm.markAllAsTouched();
    }
  }

  onSubmit() {
    console.log(this.productForm.value);
  }

  onFileSelected(event: Event) {
    console.log((event.target as HTMLInputElement).files);
  }
}
