import { animate, keyframes, style } from '@angular/animations';

export const skeletonFade_Animation = [
  animate(
    '2000ms',
    keyframes([
      style({
        background: 'linear-gradient(to right, #f1f0f0, #c1c0c0, #f1f0f0)',
        'background-size': '200%',
        'background-position': 'left',
      }),
      style({ 'background-position': 'right' }),
      style({ 'background-position': 'left' }),
    ])
  ),
];
