import { Component } from '@angular/core';
import { Book } from '@nx-dev-starter/api-one-interfaces';

@Component({
  selector: 'nx-dev-starter-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend-one';
  book: Book = {
    name: 'Angular',
    author: 'NX'
  };
}
