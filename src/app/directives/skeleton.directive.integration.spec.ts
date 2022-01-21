import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CoreModule } from '../modules/core/core.module';
import { SkeletonDirective } from './skeleton.directive';

@Component({
  template: `<div class="sut_el sut_el12" [appSkeleton]="appSkeletonInputValue">
    Test
  </div>`,
})
class DummyComponent {
  public appSkeletonInputValue = true;
}

describe('SkeletonDirective integration tests', () => {
  let fixture: ComponentFixture<DummyComponent>;
  let component: DummyComponent;
  let directive: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DummyComponent, SkeletonDirective],
      imports: [CoreModule],
    }).compileComponents();

    fixture = TestBed.createComponent(DummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    directive = fixture.debugElement.query(By.directive(SkeletonDirective));
  });

  it('should create an dummy component instance', () => {
    expect(component).toBeTruthy();
  });

  it('should create an directive instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should have skeleton class applied once isLoaded = false', () => {
    component.appSkeletonInputValue = false;
    fixture.detectChanges();

    expect(directive.classes['skeleton']).toEqual(true);
  });

  it('shouldnt have skeleton class applied once isLoaded = true', () => {
    component.appSkeletonInputValue = true;
    fixture.detectChanges();

    expect(directive.classes['skeleton']).toEqual(false);
  });
});
