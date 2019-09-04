import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PrintService {
  isPrinting = false;

  constructor(private router: Router) { }

  printDocument(documentName: string, documentData: string[]) {
    this.isPrinting = true;

    //  this.router.navigate(['/dogs/report', { outlets: { dogprint: ['numbers/123,233', documentData.join()] } }]);
    this.router.navigate(['/dogs/report', { outlets: { dogprint: ['numbers', documentData.join()] } }]);
    //  this.router.navigate([{ outlets: { dogprint: ['/report/121,233', documentData.join()] } }]);
  }

  onDataReady() {
    setTimeout(() => {
      window.print();
      this.isPrinting = false;
      this.router.navigate(['/dogs/report', { outlets: { dogprint: null } }]);
    });
  }
}