import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { blurAnimation } from 'src/app/animations/blur.animation';
import { slideAnimation } from 'src/app/animations/slide.animation';
import { InoutStatus } from 'src/app/models/internal/inoutStatus/inoutStatus.model';
import { selectIsSideNavOpened } from 'src/app/services/state/layout/layout.selectors';
import { AppLayoutState } from 'src/app/services/state/layout/models/appLayout.state';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss'],
  animations: [slideAnimation, blurAnimation],
})
export class AppLayoutComponent implements OnInit {
  public isSideNavOpened: InoutStatus;

  constructor(private store: Store<AppLayoutState>) {}

  async ngOnInit(): Promise<void> {
    this.store
      .pipe(select(selectIsSideNavOpened))
      .subscribe((isSideNavOpened: boolean) => {
        this.isSideNavOpened = (isSideNavOpened)
          ? InoutStatus.Opened
          : InoutStatus.Closed;
      });
  }
}
