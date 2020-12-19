import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchValue = '';
  @Output() searchSubmit = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(event: any) {
    event.preventDefault();
    this.searchSubmit.emit(this.searchValue);
  }

}
