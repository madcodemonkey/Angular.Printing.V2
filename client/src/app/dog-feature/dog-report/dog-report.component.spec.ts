import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogReportComponent } from './dog-report.component';

describe('DogReportComponent', () => {
  let component: DogReportComponent;
  let fixture: ComponentFixture<DogReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
