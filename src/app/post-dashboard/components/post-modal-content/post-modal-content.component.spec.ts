import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostModalContent } from './post-modal-content.component';

describe('PostListComponent', () => {
  let component: PostModalContent;
  let fixture: ComponentFixture<PostModalContent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostModalContent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostModalContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
