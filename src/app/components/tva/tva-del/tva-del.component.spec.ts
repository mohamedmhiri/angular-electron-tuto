import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvaDelComponent } from './tva-del.component';

describe('TvaDelComponent', () => {
  let component: TvaDelComponent;
  let fixture: ComponentFixture<TvaDelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvaDelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvaDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
