import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvaAddComponent } from './tva-add.component';

describe('TvaAddComponent', () => {
  let component: TvaAddComponent;
  let fixture: ComponentFixture<TvaAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvaAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
