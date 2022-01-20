import {
    animate,
    state,
    style,
    transition,
    trigger,
  } from '@angular/animations';
import { InoutStatus } from '../models/internal/inoutStatus/inoutStatus.model';
  
  export const blurAnimation = trigger('blurInOut', [
    state(
      InoutStatus.Opened,
      style({
        'filter': 'blur(10px)'
      })
    ),
    state(
      InoutStatus.Closed,
      style({
        'filter': 'blur(0px)'
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
  