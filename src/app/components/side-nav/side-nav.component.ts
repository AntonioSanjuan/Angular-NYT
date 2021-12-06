import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectIsSideNavOpened } from 'src/app/services/state/layout/layout.selectors';
import { AppLayoutState } from 'src/app/services/state/layout/models/appLayout.state';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  constructor(private store: Store<AppLayoutState>) {}

  ngOnInit(): void {
    this.store
      .pipe(select(selectIsSideNavOpened))
      .subscribe((isSideNavOpened: boolean) => {
        console.log('isSideNavOpened', isSideNavOpened);
      });
  }
}
