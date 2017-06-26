import { TestBed, async } from '@angular/core/testing';

import { SignComponent } from './sign.component';

describe('SignComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [SignComponent]});
    TestBed.compileComponents();
  }));

  it('should render...', () => {
    const fixture = TestBed.createComponent(SignComponent);
    fixture.detectChanges();
  });
});
