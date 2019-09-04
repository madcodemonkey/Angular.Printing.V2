import { Component } from '@angular/core';
import { PrintService } from './core/services/print.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngPrint';

  constructor(public printService: PrintService) { }

}
