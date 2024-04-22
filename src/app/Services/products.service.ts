import { Injectable, signal } from "@angular/core";
import { products } from "../interfaces/products";

@Injectable({
    providedIn: 'root'
})
export class AddProductsService {

    constructor() { }
    datosCompartidos = signal<products[]>([]);
}