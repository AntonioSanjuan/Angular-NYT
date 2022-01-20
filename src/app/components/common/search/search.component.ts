import { Component } from '@angular/core';
import { searchAnimation } from 'src/app/animations/search.animation';
import { InoutStatus } from 'src/app/models/internal/inoutStatus/inoutStatus.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [
    searchAnimation
  ]
})
export class SearchComponent {
  public isSearchOpened: InoutStatus = InoutStatus.Closed;

  constructor() { }

  toggleSearch() {
    this.switchSearchStatus();
  }

  search() {
    
  }

  private switchSearchStatus() {
    this.isSearchOpened = (this.isSearchOpened === InoutStatus.Closed) ? 
      InoutStatus.Opened : 
      InoutStatus.Closed;
  }

}
