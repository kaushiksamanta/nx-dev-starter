import { Component } from '@angular/core';
import { Book } from '@nx-dev-starter/api-two-interfaces';

@Component({
  selector: 'nx-dev-starter-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend-two';
  book: Book = {
    name: 'Angular',
    author: 'NX',
    isbn: 'Q23SW33SSAS3333'
  }
}
