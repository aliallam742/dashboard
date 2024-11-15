import { Component, ViewChild } from '@angular/core';
import { ChartComponent, NgApexchartsModule } from 'ng-apexcharts';
import { ChartOptions } from '../interfaces/chart.interface';


@Component({
  selector: 'app-graph',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.css'
})
export class GraphComponent {
  @ViewChild("chart") chart: ChartComponent | any;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          color: '#FF7F5C',
          data: [250, 140, 200, 230, 140],

        }
      ],
      chart: {
        height: 250,
        type: "bar",
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          columnWidth: '30%',
        }

      },
      title: {
        text: "STATIONS ACTIVATES OVERVIEW",
        floating: false

      },
      xaxis: {
        labels: {

          show: true,
          rotateAlways: false,
          style: {
            cssClass: 'text-wrap',
            fontSize: '11px'
          }
        },
        categories: [
          "JStation Name Dummy 1",
          "Station Name Dummy 1",
          "Station Name Dummy 1",
          "Station Name Dummy 1",
          "Station Name Dummy 1",


        ]
      },
      yaxis: {
        min: 150,
        max: 300
      }
    };
  }
}