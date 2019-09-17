import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwesomeGridComponent } from './awesome-grid.component';

describe('AwesomeGridComponent', () => {
  let component: AwesomeGridComponent;
  let fixture: ComponentFixture<AwesomeGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwesomeGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwesomeGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
