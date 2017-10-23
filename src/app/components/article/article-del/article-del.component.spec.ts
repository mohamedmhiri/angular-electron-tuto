import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleDelComponent } from './article-del.component';

describe('ArticleDelComponent', () => {
  let component: ArticleDelComponent;
  let fixture: ComponentFixture<ArticleDelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleDelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
