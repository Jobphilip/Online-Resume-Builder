import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Download2Component } from './download2.component';

describe('Download2Component', () => {
  let component: Download2Component;
  let fixture: ComponentFixture<Download2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Download2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Download2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
