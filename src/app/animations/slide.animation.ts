import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { InoutStatus } from '../models/internal/inoutStatus/inoutStatus.model';

export const slideAnimation = trigger('slideInOut', [
  state(
    InoutStatus.Opened,
    style({
      transform: 'translateX(0%)',
      marginLeft: '0px',
    })
  ),
  state(
    InoutStatus.Closed,
    style({
      transform: 'translateX(-100%)',
      marginLeft: '-200px',
    })
  ),
  transition(
    `${InoutStatus.Opened} => ${InoutStatus.Closed}`,
    animate('800ms ease-in-out')
  ),
  transition(
    `${InoutStatus.Closed} => ${InoutStatus.Opened}`,
    animate('800ms ease-in-out')
  ),
]);
