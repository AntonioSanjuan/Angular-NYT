import { AnimationBuilder, AnimationFactory } from '@angular/animations';
import { ElementRef } from '@angular/core';
import { of } from 'rxjs';
import { SkeletonDirective } from './skeleton.directive';

describe('SkeletonDirective unit tests', () => {
  let directive: SkeletonDirective;

  const animationPlayerMock = {
    reset: jest.fn(() => {
      return;
    }),
    pause: jest.fn(() => {
      return;
    }),
    play: jest.fn(() => {
      return;
    }),
    onDone: jest.fn(() => {
      return of(undefined);
    }),
  };

  const elMock = {} as ElementRef;
  const rendererMock = {
    addClass: jest.fn(() => {
      return;
    }),
    removeClass: jest.fn(() => {
      return;
    }),
  } as any;

  const animationBuilderMock = {
    build: jest.fn(() => {
      return {
        create: jest.fn(() => {
          return animationPlayerMock;
        }),
      } as unknown as AnimationFactory;
    }),
  } as AnimationBuilder;

  beforeEach(async () => {
    directive = new SkeletonDirective(
      elMock,
      rendererMock,
      animationBuilderMock
    );
  });

  it('should create an directive instance', () => {
    expect(directive).toBeTruthy();
  });

  it('set the variable isLoaded to false should setSkeleton', () => {
    directive.appSkeleton = false;

    //spy
    const playSpy = jest.spyOn(animationPlayerMock, 'play');
    expect(playSpy).toHaveBeenCalled();
  });

  it('set the variable isLoaded to true should unsetSkeleton', () => {
    directive.appSkeleton = true;

    //spy
    const pauseSpy = jest.spyOn(animationPlayerMock, 'pause');
    const resetSpy = jest.spyOn(animationPlayerMock, 'reset');

    expect(pauseSpy).toHaveBeenCalled();
    expect(resetSpy).toHaveBeenCalled();
  });

  // it('once the variable isLoaded is setted to false, the animation should reset itself.', () => {
  //   directive.appSkeleton = false;

  //   //spy
  //   const ondoneSpy = jest.spyOn(animationPlayerMock, 'onDone');
  //   const resetSpy = jest.spyOn(animationPlayerMock, 'reset');

  //   expect(ondoneSpy).toHaveBeenCalled();

  //   jest.spyOn(animationPlayerMock, 'onDone').mockReturnValue(new Observable());
  //   onDoneFunctionMock.mockReturnValue(Promise.resolve(false));
  //   expect(resetSpy).toHaveBeenCalled();
  // });
});
