import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent {
  constructor(private routerService: Router) {}

  public goToLogin(): void {
    this.routerService.navigate(['login']);
  }

  public goToMainView(): void {
    this.routerService.navigate(['']);
  }
}
