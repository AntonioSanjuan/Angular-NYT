import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppUserState } from 'src/app/services/state/user/models/appUser.state';
import { unsetUser } from 'src/app/services/state/user/user.actions';
import { selectUserIsLogged } from 'src/app/services/state/user/user.selectors';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  public isLogged: boolean;
  
  constructor(
    private userStore: Store<AppUserState>,
  ) { }
  
  ngOnInit() {
    this.userStore
    .pipe(select(selectUserIsLogged))
    .subscribe((isLogged: boolean) => {
      this.isLogged = isLogged;
    });
  }

  logOut() {
    this.userStore.dispatch(
      unsetUser()
    );
  }
}
