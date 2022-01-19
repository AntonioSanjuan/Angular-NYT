import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { AppModule } from 'src/app/app.module';
import { SidenavStatus } from 'src/app/models/internal/inoutStatus/sidebarStatus.model';
import { StoreMock } from 'src/app/services/state/utils/store.mock';

import { AppLoginLayoutComponent } from './app-login-layout.component';

describe('AppLoginLayoutComponent', () => {
  let component: AppLoginLayoutComponent;
  let fixture: ComponentFixture<AppLoginLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [
        { provide: Store, useValue: StoreMock },
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLoginLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('AppLoginLayoutComponent initially must subscribe to selectIsSideNavOpened redux selector', () => {
    const input = true;
    const subject: Subject<boolean> = new Subject();
  
    jest.spyOn(StoreMock, 'pipe').mockReturnValue(subject.asObservable());
  
    component.ngOnInit().then(() => {
      subject.next(input);
      fixture.detectChanges();

      expect(component.isSideNavOpened).toEqual(SidenavStatus.Opened)
    });
  });
});
