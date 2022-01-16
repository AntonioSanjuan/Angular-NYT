import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { RouterMock } from 'src/app/modules/routing/routing.mock';
import { StoreMock } from 'src/app/services/state/utils/store.mock';

import { TopNavComponent } from './top-nav.component';

describe('TopNavComponent', () => {
  let component: TopNavComponent;
  let fixture: ComponentFixture<TopNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopNavComponent],
      providers: [
        { provide: Store, useValue: StoreMock },
        { provide: Router, useValue: RouterMock }
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('TopNavComponent openSettings() must navigate to login', () => {
    // spy
    const navigateSpy = jest.spyOn(RouterMock, 'navigate');
    component.goToLogin()
    expect(navigateSpy).toHaveBeenCalledWith(['login'])  });

  it('TopNavComponent openSettings() must navigate to default route', () => {
    // spy
    const navigateSpy = jest.spyOn(RouterMock, 'navigate');
    component.goToMainView()
    expect(navigateSpy).toHaveBeenCalledWith([''])
  });


  it('TopNavComponent openSettings() must switch switchIsSidenavOpenedAction in the store service', () => {
    // spy
    const stateSpy = jest.spyOn(StoreMock, 'dispatch');

    component.openSettings();
    expect(stateSpy).toHaveBeenCalled();
  });
});
