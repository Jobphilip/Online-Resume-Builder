import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecttemplateComponent } from './selecttemplate.component';

describe('SelecttemplateComponent', () => {
  let component: SelecttemplateComponent;
  let fixture: ComponentFixture<SelecttemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelecttemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecttemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
