import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "product-list",
  template: `
    <h3>Products</h3>
    <product
      *ngFor="let product of products"
      [product]="product"
      (productAdded)="addProductToCart($event)"
    ></product>
  `,
  styles: [`
      h1 { font-weight: normal; }
      :host .jumbotron {
        padding : 1rem 1rem !important;
      }
  `]
})
export class ProductListComponent {
  @Input() products: any[];
  @Output() productAdded = new EventEmitter();
  addProductToCart(product) {
    this.productAdded.emit(product);
  }
}
