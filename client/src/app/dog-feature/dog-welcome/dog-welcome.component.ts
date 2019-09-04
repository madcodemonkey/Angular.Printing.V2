import { Component, OnInit } from '@angular/core';
import { PrintService } from 'src/app/core/services/print.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dog-welcome',
  templateUrl: './dog-welcome.component.html',
  styleUrls: ['./dog-welcome.component.css']
})
export class DogWelcomeComponent implements OnInit {

  constructor(private printService: PrintService,
    private router: Router) { }

  ngOnInit() {
  }

  onPrintDogReport() {
    const dogIds = ['7101', '80102'];
    this.printService.printDocument('report', dogIds);

    //this.router.navigate(['/dogs/report', { outlets: { dogprint: 'numbers' } }]);
  }
}
