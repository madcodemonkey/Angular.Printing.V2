import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogFeatureComponent } from './dog-feature.component';

describe('DogFeatureComponent', () => {
  let component: DogFeatureComponent;
  let fixture: ComponentFixture<DogFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
