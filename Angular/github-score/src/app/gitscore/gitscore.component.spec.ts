import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitscoreComponent } from './gitscore.component';

describe('GitscoreComponent', () => {
  let component: GitscoreComponent;
  let fixture: ComponentFixture<GitscoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitscoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitscoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
