import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-light',
  templateUrl: './table-light.component.html',
  styleUrls: ['./table-light.component.scss'],
})
export class TableLightComponent implements OnInit {
  headers!: string[];
  collection!: any[];
  constructor() {
    // mock headers
    this.headers = [
      'Type',
      'Client',
      'NbJours',
      'Tjm HT',
      'Total HT',
      'Total TTC',
      'State',
    ];
    // mock collectin
    this.collection = [
      {
        type: 'formation',
        client: 'Modis',
        NbJours: 10,
        TjmHT: 1200,
        totalHT: 12000,
        totalTTC: 14400,
        state: 'Confirmed',
      },
      {
        type: 'formation',
        client: 'Nemesy',
        NbJours: 10,
        TjmHT: 1200,
        totalHT: 12000,
        totalTTC: 14400,
        state: 'Option',
      },
    ];
  }

  ngOnInit(): void {}
}
