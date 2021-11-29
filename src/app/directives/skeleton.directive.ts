import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSkeleton]',
})
export class SkeletonDirective {
  @Input() set appSkeleton(skeletonRequired: boolean) {
    skeletonRequired ? this.setSkeleton() : this.unsetSkeleton();
  }
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  private unsetSkeleton() {
    this.renderer.removeClass(this.el.nativeElement, 'skeleton');
  }

  private setSkeleton() {
    this.renderer.addClass(this.el.nativeElement, 'skeleton');
  }
}
