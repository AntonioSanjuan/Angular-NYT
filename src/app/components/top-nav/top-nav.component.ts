import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppUserState } from 'src/app/services/state/user/models/appUser.state';
import { selectUserIsLogged } from 'src/app/services/state/user/user.selectors';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent implements OnInit {
  @Input() private readonly displayLoginButton = true;
  public loginButtonHidden: boolean;

  constructor(
    private routerService: Router,
    private store: Store<AppUserState>
  ) {}

  ngOnInit(): void {
    this.loginButtonHidden = !this.displayLoginButton;

    this.store
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
}
