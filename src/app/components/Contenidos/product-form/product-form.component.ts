import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup;
  selectedFile: File;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      // Definición de otros campos del formulario
      imagen: ['']
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      // Procesar el envío del formulario
    } else {
      // Mostrar errores de validación
      this.validateAllFormFields(this.productForm);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    // Implementación de la función validateAllFormFields
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
    // Puedes hacer algo con el archivo seleccionado, como cargarlo a un servicio
  }
}
