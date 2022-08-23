import { Component, Input, Output, EventEmitter } from "@angular/core";
@Component({
  selector: "cart-product",
  template: `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <div *ngIf="product">
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
          <input
            type="number"
            [(ngModel)]="product.num"
            min="0"
            max= "{{product.limitto}}"
            (ngModelChange)="modelChanged($event)"            
          />
        </div>
      </div>
    </div>
  `
})
export class CartProductComponent {
  @Input() product: any;
  @Output() productRemoved = new EventEmitter();
  modelChanged(product) {
    if (this.product.num === 0) {
      this.productRemoved.emit(this.product);
    }
  }
}
