import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChangeDetectionStrategy, signal } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatButtonToggleModule, MatCheckboxModule, CalendarModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  hideSingleSelectionIndicator = signal(true);
  date2: string = ''
}
