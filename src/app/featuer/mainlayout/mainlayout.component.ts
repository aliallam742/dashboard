import { Component, ViewChild } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { ChartComponent, NgApexchartsModule } from 'ng-apexcharts';
import { ChartOptions } from './components/interfaces/chart.interface';
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
  selector: 'app-mainlayout',
  standalone: true,
  imports: [MatCheckboxModule, ProgressBarModule, MatButtonToggleModule, RouterOutlet, RouterLink, RouterModule, NgApexchartsModule],
  templateUrl: './mainlayout.component.html',
  styleUrl: './mainlayout.component.css'
})
export class MainlayoutComponent {
  @ViewChild("chart") chart: ChartComponent | any;
  public chartOptions: Partial<ChartOptions>;

  constructor(private _router: Router) {
    this.chartOptions = {
      series: [
        {
          name: "Radar Series 1",
          data: [50, 52, 38, 24, 33, 10, 8, 15, 14, 40, 50, 80]
        },

        {
          name: "Radar Series 2",
          data: [62, 81, 80, 56, 80, 105, 14, 2, 58, 80, 100, 75]
        }
      ],
      stroke: {
        show: false,

      },
      markers: { showNullDataPoints: false },
      yaxis: {
        show: false
      },
      title: {
        text: "Hourly Sales",
        align: 'center'
      },
      xaxis: {
        categories: ['24:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
        labels: {
          show: true,
          style: {
            colors: ["#a8a8a8"],
            fontSize: "11px",
            fontFamily: 'Arial'
          }
        }
      },
      chart: {
        toolbar: { show: false },
        width: 500,
        type: 'radar'
      },
    }
  }
  ngOnInit() {
    console.log(this._router.url);
    this.toggleValue = this._router.url
  }
  cardData: any = [
    { mony: '71,028', currency: 'EGP', valueText: 'Total Value', icon: 'fa-solid fa-caret-down', number: '2', supSym: '', symbols: '%', isSelected: true, sup: '', isUp: false },
    { mony: '20,000', currency: 'm', valueText: 'Total Sales', icon: 'fa-solid fa-caret-up', number: '50', supSym: '2', symbols: 'm', isSelected: false, sup: '2', isUp: true },
    { mony: '71,028', currency: 'm', valueText: 'Avg Sales', icon: 'fa-solid fa-caret-down', number: '50', supSym: '2', symbols: 'm', isSelected: false, sup: '2', isUp: false },
    { mony: '1567', currency: '', valueText: 'Total Transaction Count', icon: 'fa-solid fa-caret-up', number: '20', supSym: '', symbols: '', isSelected: false, sup: '', isUp: true }
  ]
  toggleValue: string = ''
  change(event: any) {
    this.toggleValue = event.value
  }
}
