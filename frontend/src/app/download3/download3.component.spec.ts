import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Download3Component } from './download3.component';

describe('Download3Component', () => {
  let component: Download3Component;
  let fixture: ComponentFixture<Download3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Download3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Download3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
