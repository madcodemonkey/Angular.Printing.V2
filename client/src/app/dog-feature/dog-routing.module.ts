import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DogWelcomeComponent } from './dog-welcome/dog-welcome.component';
import { DogReportComponent } from './dog-report/dog-report.component';
import { DogFeatureComponent } from './dog-feature.component';

const routes: Routes = [
  {
    path: '',
    component: DogFeatureComponent,
    children: [
      { path: 'welcome', component: DogWelcomeComponent },
      { path: 'report/:dogIds', component: DogReportComponent },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DogRoutingModule { }
