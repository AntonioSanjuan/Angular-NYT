import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkeletonDirective } from './skeleton.directive';

@Component({
  template: `<div class="sut_el" [appSkeleton]="false">Test</div>`,
})
class DummyComponent {}

describe('SkeletonDirective', () => {
  let fixture: ComponentFixture<DummyComponent>;
  let component: DummyComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DummyComponent, SkeletonDirective],
      imports: [BrowserAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(DummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });
});
