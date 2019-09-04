import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InvoiceComponent } from './invoice/invoice.component';
import { ReportsComponent } from './reports.component';
import { PrintService } from '../core/services/print.service';

@NgModule({
  declarations: [ReportsComponent, InvoiceComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [PrintService]
})
export class ReportsModule { }