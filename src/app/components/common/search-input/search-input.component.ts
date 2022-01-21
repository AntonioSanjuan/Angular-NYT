import { Component, EventEmitter, Output } from '@angular/core';
import { searchAnimation } from 'src/app/animations/search.animation';
import { InoutStatus } from 'src/app/models/internal/inoutStatus/inoutStatus.model';

@Component({
  selector: 'app-search',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  animations: [
    searchAnimation
  ]
})
export class SearchComponent {
  @Output() output = new EventEmitter<string>();

  public isSearchOpened: InoutStatus = InoutStatus.Closed;
  public textSearch: string = '';

  constructor() { }

  toggleSearch() {
    this.switchSearchStatus();
  }

  search() {
    if(this.textSearch.length > 0) {
      this.output.emit(this.textSearch)
    }
  }

  private switchSearchStatus() {
    this.isSearchOpened = (this.isSearchOpened === InoutStatus.Closed) ? 
      InoutStatus.Opened : 
      InoutStatus.Closed;
  }

}
