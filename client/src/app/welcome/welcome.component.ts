import { Component, OnInit } from '@angular/core';
import { PrintService } from '../reports/services/print.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(public printService: PrintService) { }

  ngOnInit() {
  }

  onPrintInvoice() {
    const invoiceIds = ['101', '102'];
    this.printService.printDocument('invoice', invoiceIds);
  }
}
