import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogRoutingModule } from './dog-routing.module';
import { DogWelcomeComponent } from './dog-welcome/dog-welcome.component';
import { DogReportComponent } from './dog-report/dog-report.component';
import { DogFeatureComponent } from './dog-feature.component';
import { DogNumberReportComponent } from './dog-number-report/dog-number-report.component';

@NgModule({
  declarations: [DogWelcomeComponent, DogReportComponent, DogFeatureComponent, DogNumberReportComponent],
  imports: [
    CommonModule,
    DogRoutingModule
  ]
})
export class DogFeatureModule { }
