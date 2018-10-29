import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTabLabelComponent } from './post-tab-label.component';

describe('PostTabLabelComponent', () => {
  let component: PostTabLabelComponent;
  let fixture: ComponentFixture<PostTabLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostTabLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostTabLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
