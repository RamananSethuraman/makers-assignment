import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  template: `
    <footer class="page-footer font-small pt-4 text-center">
      <hr />
      <p>
        Built By Venkataramanan S |
      </p>
    </footer>
  `,
  styles: []
})
export class FooterComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
