import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatReportComponent } from './cat-report.component';

describe('CatReportComponent', () => {
  let component: CatReportComponent;
  let fixture: ComponentFixture<CatReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
