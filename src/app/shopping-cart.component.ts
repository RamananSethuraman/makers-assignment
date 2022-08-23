import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "shopping-cart",
  template: `
    <h5>Shopping Cart ({{ calcTotal()}})</h5>
    <h5>Total Cost $ {{ calcPrice().toFixed(2) }}</h5>
    <cart-product
      *ngFor="let product of products"
      [product]="product"
      (productRemoved)="removeProduct($event)"
      ><cart-product> </cart-product
    ></cart-product>
  `
})
export class ShoppingCartComponent {
  @Input() products: any[];
  @Output() productRemoved = new EventEmitter();
  calcTotal() {
    return (this.products.reduce((acc, prod) => (acc += prod.num), 0));
  }
  calcPrice() {
    return this.products.reduce((acc, prod) => {
      if (this.calcTotal() >= 500) {
        return (acc += prod.price * prod.num * 0.5);
      } else {
        return (acc += prod.price * prod.num);
      }
    }, 0);
  }

  removeProduct(product) {
    this.productRemoved.emit(product);
  }
}
