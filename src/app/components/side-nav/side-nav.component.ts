import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { slideAnimation } from 'src/app/animations/slide.animation';
import { SidenavStatus } from 'src/app/models/internal/sidebarStatus/sidebarStatus.model';
import { selectIsSideNavOpened } from 'src/app/services/state/layout/layout.selectors';
import { AppLayoutState } from 'src/app/services/state/layout/models/appLayout.state';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  animations: [slideAnimation],
})
export class SideNavComponent implements OnInit {
  public isSideNavOpened: SidenavStatus;
  constructor(private store: Store<AppLayoutState>) {}

  ngOnInit(): void {
    this.store
      .pipe(select(selectIsSideNavOpened))
      .subscribe((isSideNavOpened: boolean) => {
        this.isSideNavOpened = isSideNavOpened
          ? SidenavStatus.Opened
          : SidenavStatus.Closed;
      });
  }
}
