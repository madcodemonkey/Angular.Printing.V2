import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatFeatureComponent } from './cat-feature.component';

describe('CatFeatureComponent', () => {
  let component: CatFeatureComponent;
  let fixture: ComponentFixture<CatFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
