import { Component } from '@angular/core';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatToolbarModule, RouterLink],
  template: `
  <mat-toolbar style="background-color: blueviolet">
    <button mat-icon-button routerLink="/">
      <mat-icon>menu</mat-icon>
    </button>
    <span>My Product Management</span>
  </mat-toolbar>
  `,
  styles: ``
})
export class HeaderComponent {

}
