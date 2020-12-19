import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pages = [];

  constructor(private wikipedia: WikipediaService) { }

  onSearch(searchQuery: string) {
    this.wikipedia.fetchResults(searchQuery).subscribe((response: any) => { 
      this.pages = response.query.search;
    });
  }
}
