import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatWelcomeComponent } from './cat-welcome.component';

describe('CatWelcomeComponent', () => {
  let component: CatWelcomeComponent;
  let fixture: ComponentFixture<CatWelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatWelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
