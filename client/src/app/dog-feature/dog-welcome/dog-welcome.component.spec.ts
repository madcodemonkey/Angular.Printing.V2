import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogWelcomeComponent } from './dog-welcome.component';

describe('DogWelcomeComponent', () => {
  let component: DogWelcomeComponent;
  let fixture: ComponentFixture<DogWelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogWelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
