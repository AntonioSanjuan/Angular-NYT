import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { StoreMock } from 'src/app/services/state/utils/store.mock';
import { ProfileSectionComponent } from './components/profile-section/profile-section.component';
import { SectionComponent } from './components/section/section.component';

import { SideNavComponent } from './side-nav.component';

describe('SideNavComponent', () => {
  let component: SideNavComponent;
  let fixture: ComponentFixture<SideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SideNavComponent, ProfileSectionComponent, SectionComponent],
      providers: [
        { provide: Store, useValue: StoreMock },
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
