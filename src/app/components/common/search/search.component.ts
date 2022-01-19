import { Component, OnInit } from '@angular/core';
import { searchAnimation } from 'src/app/animations/search.animation';
import { SidenavStatus } from 'src/app/models/internal/inoutStatus/sidebarStatus.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [
    searchAnimation
  ]
})
export class SearchComponent {
  public isSearchOpened: SidenavStatus = SidenavStatus.Closed;

  constructor() { }

  toggleSearch() {
    this.switchSearchStatus();
  }

  search() {
    
  }

  private switchSearchStatus() {
    this.isSearchOpened = (this.isSearchOpened === SidenavStatus.Closed) ? 
      SidenavStatus.Opened : 
      SidenavStatus.Closed;
  }

}
