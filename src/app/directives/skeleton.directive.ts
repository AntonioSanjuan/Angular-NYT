import { AnimationBuilder, AnimationPlayer } from '@angular/animations';
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { skeletonFade_Animation } from '../animations/skeletonFadeInAnimation';

@Directive({
  selector: '[appSkeleton]',
})
export class SkeletonDirective {
  animationPlayer: AnimationPlayer;
  private viewInitialized = false;

  @Input() set appSkeleton(isLoaded: boolean) {
    isLoaded ? this.unsetSkeleton() : this.setSkeleton();
  }
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private animationBuilder: AnimationBuilder
  ) {
    this.createAnimation();
  }

  private unsetSkeleton() {
    this.renderer.removeClass(this.el.nativeElement, 'skeleton');
    this.stopSkeletonAnimation();
  }

  private setSkeleton() {
    this.renderer.addClass(this.el.nativeElement, 'skeleton');
    this.playSkeletonAnimation();
  }

  private createAnimation() {
    const directiveAnimation = this.animationBuilder.build(
      skeletonFade_Animation
    );
    this.animationPlayer = directiveAnimation.create(this.el.nativeElement);
  }

  private stopSkeletonAnimation() {
    this.animationPlayer.pause();
    this.animationPlayer.reset();
  }

  private playSkeletonAnimation() {
    this.animationPlayer.onDone(() => {
      this.animationPlayer.reset();
      this.playSkeletonAnimation();
    });

    this.animationPlayer.play();
  }
}
