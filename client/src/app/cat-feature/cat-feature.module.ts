import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatWelcomeComponent } from './cat-welcome/cat-welcome.component';
import { CatReportComponent } from './cat-report/cat-report.component';
import { CatRoutingModule } from './cat-routing.module';
import { CatFeatureComponent } from './cat-feature.component';

@NgModule({
  declarations: [CatWelcomeComponent, CatReportComponent, CatFeatureComponent],
  imports: [
    CommonModule, CatRoutingModule
  ]
})
export class CatFeatureModule { }
