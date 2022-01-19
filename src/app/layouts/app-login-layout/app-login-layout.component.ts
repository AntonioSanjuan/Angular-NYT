import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { SidenavStatus } from 'src/app/models/internal/inoutStatus/sidebarStatus.model';
import { selectIsSideNavOpened } from 'src/app/services/state/layout/layout.selectors';
import { AppLayoutState } from 'src/app/services/state/layout/models/appLayout.state';

@Component({
  selector: 'app-app-login-layout',
  templateUrl: './app-login-layout.component.html',
  styleUrls: ['./app-login-layout.component.scss'],
})
export class AppLoginLayoutComponent implements OnInit {
  public isSideNavOpened: SidenavStatus;

  constructor(private store: Store<AppLayoutState>) {}
  async ngOnInit(): Promise<void> {
    this.store
    .pipe(select(selectIsSideNavOpened))
    .subscribe((isSideNavOpened: boolean) => {
      this.isSideNavOpened = isSideNavOpened
        ? SidenavStatus.Opened
        : SidenavStatus.Closed;
    });
  }
}
