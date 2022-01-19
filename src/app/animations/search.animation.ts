import {
    animate,
    state,
    style,
    transition,
    trigger,
  } from '@angular/animations';
  import { SidenavStatus } from '../models/internal/inoutStatus/sidebarStatus.model';
  
  export const searchAnimation = trigger('searchInOut', [
    state(
      SidenavStatus.Opened,
      style({
        width: '100%'
      })
    ),
    state(
      SidenavStatus.Closed,
      style({
        width: '0%',
      })
    ),
    transition(
      `${SidenavStatus.Opened} <=> ${SidenavStatus.Closed}`,
      animate('700ms ease-in')
    )
  ]);
  