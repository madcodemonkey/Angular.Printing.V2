import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CatWelcomeComponent } from './cat-welcome/cat-welcome.component';
import { CatReportComponent } from './cat-report/cat-report.component';
import { CatFeatureComponent } from './cat-feature.component';

const routes: Routes = [
  {
    path: '',
    component: CatFeatureComponent,
    children: [
      { path: 'welcome', component: CatWelcomeComponent },
      { path: 'report/:catIds', component: CatReportComponent },
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
export class CatRoutingModule { }
