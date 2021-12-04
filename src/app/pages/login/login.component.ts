import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserResponseDto } from 'src/app/models/dtos/user/userData.model';
import { AppDataState } from 'src/app/services/state/data/models/appData.state';
import { setUser } from 'src/app/services/state/user/user.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(
    private routerService: Router,
    private store: Store<AppDataState>
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  public login(): void {
    const user = {
      userName: 'userTest',
    } as UserResponseDto;

    this.store.dispatch(
      setUser({
        user_newState: user,
      })
    );
    this.routerService.navigate(['']);
  }

  private initializeForm(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }
}
