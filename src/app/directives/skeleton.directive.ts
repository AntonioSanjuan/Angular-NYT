import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSkeleton]',
})
export class SkeletonDirective {
  private skeletonElements: ElementRef[] = [];

  @Input() set appSkeleton(skeletonRequired: boolean) {
    this.skeletonElements =
      this.el.nativeElement.querySelectorAll('.skeletonElement');
    skeletonRequired ? this.setSkeleton() : this.unsetSkeleton();
  }
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  private unsetSkeleton() {
    this.skeletonElements.forEach((skeletonElement) => {
      this.renderer.removeClass(skeletonElement, 'skeleton');
    });
  }

  private setSkeleton() {
    this.skeletonElements.forEach((skeletonElement) => {
      this.renderer.addClass(skeletonElement, 'skeleton');
    });
  }
}
