import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CoreModule } from 'src/app/modules/core/core.module';
import { RouterMock } from 'src/app/modules/routing/routing.mock';
import { StoreMock } from 'src/app/services/state/utils/store.mock';

import { LoginComponent } from './login.component';
import { LoginModule } from './login.module';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreModule, LoginModule],
      providers: [
        { provide: Store, useValue: StoreMock },
        { provide: Router, useValue: RouterMock }
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
