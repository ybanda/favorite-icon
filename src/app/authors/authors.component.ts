import { AuthorsService } from './../authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  template: `
    {{ title }}
    <ul>
      <li *ngFor = "let author of authors" >
          {{author}}
      </li>
</ul>
   `,
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
    title = "Authors";
    authors;
  constructor(author: AuthorsService) {
    this.authors = author.getAuthors();
   }

  ngOnInit(): void {
  }

}
