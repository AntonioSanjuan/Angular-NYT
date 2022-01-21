import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { blurAnimation } from 'src/app/animations/blur.animation';
import { slideAnimation } from 'src/app/animations/slide.animation';
import { InoutStatus } from 'src/app/models/internal/inoutStatus/inoutStatus.model';
import { selectIsSideNavOpened } from 'src/app/services/state/layout/layout.selectors';
import { AppLayoutState } from 'src/app/services/state/layout/models/appLayout.state';
import { AppRouteState } from 'src/app/services/state/route/models/appRoute.state';
import { getRouteInfo, selectRouteState } from 'src/app/services/state/route/route.selectors';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss'],
  animations: [slideAnimation, blurAnimation],
})
export class AppLayoutComponent implements OnInit {
  public isSideNavOpened: InoutStatus;

  constructor(
    private layoutstore: Store<AppLayoutState>,
    private routestore: Store<AppRouteState>) {}

  async ngOnInit(): Promise<void> {
    this.layoutstore
      .pipe(select(selectIsSideNavOpened))
      .subscribe((isSideNavOpened: boolean) => {
        this.isSideNavOpened = (isSideNavOpened)
          ? InoutStatus.Opened
          : InoutStatus.Closed;
    });

    this.routestore
    .pipe(select(selectRouteState))
    .subscribe((routeState: any) => {
      console.log('routeState', routeState)
    });
  }
}
