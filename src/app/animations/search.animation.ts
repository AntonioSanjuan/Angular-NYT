import {
    animate,
    state,
    style,
    transition,
    trigger,
  } from '@angular/animations';
import { InoutStatus } from '../models/internal/inoutStatus/inoutStatus.model';
  
  export const searchAnimation = trigger('searchInOut', [
    state(
      InoutStatus.Opened,
      style({
        width: '100%'
      })
    ),
    state(
      InoutStatus.Closed,
      style({
        width: '0%',
      })
    ),
    transition(
      `${InoutStatus.Opened} <=> ${InoutStatus.Closed}`,
      animate('700ms ease-in-out')
    )
  ]);
  