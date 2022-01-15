import {
    animate,
    state,
    style,
    transition,
    trigger,
  } from '@angular/animations';
  import { SidenavStatus } from '../models/internal/sidebarStatus/sidebarStatus.model';
  
  export const blurAnimation = trigger('blurInOut', [
    state(
      SidenavStatus.Opened,
      style({
        'filter': 'blur(10px)'
      })
    ),
    state(
      SidenavStatus.Closed,
      style({
        'backdrop-filter': 'blur(0px)'
      })
    ),
    transition(
      `${SidenavStatus.Opened} => ${SidenavStatus.Closed}`,
      animate('800ms ease-in-out')
    ),
    transition(
      `${SidenavStatus.Closed} => ${SidenavStatus.Opened}`,
      animate('800ms ease-in-out')
    ),
  ]);
  