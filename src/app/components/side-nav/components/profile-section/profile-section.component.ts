import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppUserState } from 'src/app/services/state/user/models/appUser.state';
import { selectUserIsLogged } from 'src/app/services/state/user/user.selectors';

@Component({
  selector: 'app-profile-section',
  templateUrl: './profile-section.component.html',
  styleUrls: ['./profile-section.component.scss']
})
export class ProfileSectionComponent {
  @Input() public readonly isLogged: boolean;
}
