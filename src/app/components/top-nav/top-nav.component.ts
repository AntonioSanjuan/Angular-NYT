import { AppLayoutState } from 'src/app/services/state/layout/models/appLayout.state';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppUserState } from 'src/app/services/state/user/models/appUser.state';
import { selectUserIsLogged } from 'src/app/services/state/user/user.selectors';
import { switchIsSidenavOpenedAction } from 'src/app/services/state/layout/layout.actions';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent implements OnInit {
  @Input() private readonly displayLoginButton = true;
  @Input() public readonly displaySidenavButton = true;
  public loginButtonHidden: boolean;
  constructor(
    private routerService: Router,
    private userStore: Store<AppUserState>,
    private layoutStore: Store<AppLayoutState>
  ) {}

  ngOnInit(): void {
    this.loginButtonHidden = !this.displayLoginButton;

    this.userStore
      .pipe(select(selectUserIsLogged))
      .subscribe((isLogged: boolean) => {
        if (this.displayLoginButton) {
          this.loginButtonHidden = isLogged;
        }
      });
  }

  public goToLogin(): void {
    this.routerService.navigate(['login']);
  }

  public goToMainView(): void {
    this.routerService.navigate(['']);
  }

  public openSettings(): void {
    this.layoutStore.dispatch(switchIsSidenavOpenedAction());
  }
}
