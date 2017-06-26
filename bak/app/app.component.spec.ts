import { APP_BASE_HREF } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

const TEST_PROVIDERS = [
  { provide: APP_BASE_HREF, useValue: '/' },
  { provide: 'environment', useValue: 'Test' }
];

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [TEST_PROVIDERS]
    });

    this.fixture = TestBed.createComponent(AppComponent);
  });

  it('should display friendly greeter with component name', () => {
    this.fixture.detectChanges();

    const debugElement = this.fixture.debugElement.query(By.css('h2'));
    const nativeElement = debugElement.nativeElement;

    expect(nativeElement.textContent)
      .toContain('Hi, I\'m AppComponent and I\'m running in Test mode!');
  });
});
