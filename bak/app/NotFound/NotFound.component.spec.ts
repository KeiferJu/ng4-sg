import { TestBed, async } from '@angular/core/testing';

import { NotFoundComponent } from './NotFound.component';

describe('NotFoundComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [NotFoundComponent]});
    TestBed.compileComponents();
  }));

  it('should render...', () => {
    const fixture = TestBed.createComponent(NotFoundComponent);
    fixture.detectChanges();
  });
});
