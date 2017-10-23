import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvaUpdateComponent } from './tva-update.component';

describe('TvaUpdateComponent', () => {
  let component: TvaUpdateComponent;
  let fixture: ComponentFixture<TvaUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvaUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
