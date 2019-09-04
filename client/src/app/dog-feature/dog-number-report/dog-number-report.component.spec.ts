import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogNumberReportComponent } from './dog-number-report.component';

describe('DogNumberReportComponent', () => {
  let component: DogNumberReportComponent;
  let fixture: ComponentFixture<DogNumberReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogNumberReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogNumberReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
