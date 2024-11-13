import { Component } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-mainlayout',
  standalone: true,
  imports: [MatCheckboxModule, MatButtonToggleModule, RouterOutlet, RouterLink, RouterModule],
  templateUrl: './mainlayout.component.html',
  styleUrl: './mainlayout.component.css'
})
export class MainlayoutComponent {

  cardData: any = [
    { mony: '71,028', currency: 'EGP', valueText: 'Total Value', icon: 'fa-solid fa-caret-down', number: '2', supSym: '', symbols: '%', isSelected: true, sup: '', isUp: false },
    { mony: '20,000', currency: 'm', valueText: 'Total Sales', icon: 'fa-solid fa-caret-up', number: '50', supSym: '2', symbols: 'm', isSelected: false, sup: '2', isUp: true },
    { mony: '71,028', currency: 'm', valueText: 'Avg Sales', icon: 'fa-solid fa-caret-down', number: '50', supSym: '2', symbols: 'm', isSelected: false, sup: '2', isUp: false },
    { mony: '1567', currency: '', valueText: 'Total Transaction Count', icon: 'fa-solid fa-caret-up', number: '20', supSym: '', symbols: '', isSelected: false, sup: '', isUp: true }
  ]
}
