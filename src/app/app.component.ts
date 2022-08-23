import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  productList = [
      { name: "Deanston 12 years old", price: 99.99, SKU: "DEAN" , limitto: ""},
      { name: "Kilkerran 12 years old", price: 89.99, SKU: "KIL", limitto: "1"},
      { name: "Arran 10 years old", price: 79.99,  SKU: "ARR" , limitto: ""},
      { name: "Johnnie Walker Green Label", price: 75.99,  SKU: "JOHN", limitto: "" }
    ];
    

  cartProductList = [];

  addProductToCart(product) {
    const productExistInCart = this.cartProductList.find(
      productInCart => productInCart.name === product.name
    );
    if (!productExistInCart) {
      this.cartProductList.push({ ...product, num: 1 });
      return;
    }
    productExistInCart.num += 1;
  }
  removeProduct(product) {
    this.cartProductList = this.cartProductList.filter(
      ({ name }) => name !== product.name
    );
  }
}
