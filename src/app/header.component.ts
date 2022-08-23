import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  template: `
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <a class="navbar-brand" href="#">Kilkimi Whiskies Online Store</a>
      </nav>
      <div class="container">
      
      <hr class="my-4">
        <p>Maker has expanded and is now selling Scotch whiskies online, under the trading name Kilkimi Whiskies.</p>
      </div>
  `,
  styles: [`
      h1 { font-weight: normal; }
      :host .jumbotron {
        padding : 1rem 1rem !important;
      }
  `]
})
export class HeaderComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
