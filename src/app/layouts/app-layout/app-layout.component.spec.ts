import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { AppModule } from 'src/app/app.module';
import { InoutStatus } from 'src/app/models/internal/inoutStatus/inoutStatus.model';
import { StoreMock } from 'src/app/services/state/utils/store.mock';

import { AppLayoutComponent } from './app-layout.component';

describe('AppLayoutComponent', () => {
  let component: AppLayoutComponent;
  let fixture: ComponentFixture<AppLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [
        { provide: Store, useValue: StoreMock },
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('AppLayoutComponent initially must subscribe to selectIsSideNavOpened redux selector', () => {
    const input = true;
    const subject: Subject<boolean> = new Subject();
  
    jest.spyOn(StoreMock, 'pipe').mockReturnValue(subject.asObservable());
  
    component.ngOnInit().then(() => {
      subject.next(input);
      fixture.detectChanges();

      expect(component.isSideNavOpened).toEqual(InoutStatus.Opened)
    });
  });
});
