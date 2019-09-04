import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrintService } from 'src/app/core/services/print.service';

@Component({
  selector: 'app-dog-number-report',
  templateUrl: './dog-number-report.component.html',
  styleUrls: ['./dog-number-report.component.css']
})
export class DogNumberReportComponent implements OnInit {
  dogIds: string[];
  dogDetails: Promise<any>[];

  constructor(private route: ActivatedRoute, private printService: PrintService) {
    const dogNumbers = this.route.snapshot.params['dogIds'];
    this.dogIds = dogNumbers !== null && dogNumbers !== undefined ?
      dogNumbers.split(',') : []; // this.route.snapshot.params['dogIds'].split(',');
  }

  ngOnInit() {
    this.dogDetails = this.dogIds
      .map(id => this.getDogDetails(id));
    Promise.all(this.dogDetails)
      .then(() => this.printService.onDataReady());
  }

  getDogDetails(invoiceId) {
    const amount = Math.floor((Math.random() * 100));
    return new Promise(resolve =>
      setTimeout(() => resolve({ amount }), 1000)
    );
  }
}
