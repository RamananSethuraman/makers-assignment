import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "product",
  template: `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
      <p class="card-title font-weight-bold">{{ product.name }}</p>
        <p class="card-text">Price :
          {{
            product.price.toLocaleString("en-NZ", {
              style: "currency",
              currency: "NZD",
              minimumFractionDigits: 0, 
              maximumFractionDigits: 2
            })
          }}
        </p>
        <p>
          Add To Basket
          <button
            class="btn btn-primary btn-sm"
            (click)="addProductToCart(product)" 
            [disabled]="(product.num >= product.limitTo) ? true:false"
          >
            +
          </button>
        </p>
      </div>
    </div>
  `
})
export class ProductComponent {
  @Input() product: any;
  @Output() productAdded = new EventEmitter();
  addProductToCart(product) {
    console.log(product);
    this.productAdded.emit(product);
  }
}
