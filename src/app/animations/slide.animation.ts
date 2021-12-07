import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { SidenavStatus } from '../models/internal/sidebarStatus/sidebarStatus.model';

export const slideAnimation = trigger('slideInOut', [
  state(
    SidenavStatus.Opened,
    style({
      transform: 'translateX(0%)',
    })
  ),
  state(
    SidenavStatus.Closed,
    style({
      transform: 'translateX(-100%)',
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
