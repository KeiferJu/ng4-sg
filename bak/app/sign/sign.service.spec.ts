import { inject, TestBed, fakeAsync } from '@angular/core/testing';
import { BaseRequestOptions, Response, ResponseOptions, RequestMethod, Http } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { SignService } from './sign.service';

const mockHttpProvider = {
  provide: Http,
  useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
    return new Http(backend, defaultOptions);
  },
  deps: [MockBackend, BaseRequestOptions]
};

const baseUrlProvider = { provide: 'baseUrl', useValue: 'http://localhost:8000' };

describe('SignService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SignService,
        MockBackend,
        BaseRequestOptions,
        mockHttpProvider,
        baseUrlProvider
      ]
    });
  });

  it('should use an HTTP call to obtain data',
    inject([SignService, MockBackend], fakeAsync((service: SignService, backend: MockBackend) => {
      backend.connections.subscribe((connection: MockConnection) => {
        expect(connection.request.method).toBe(RequestMethod.Get);
        expect(connection.request.url).toBe('http://localhost:8000/api/data');
      });

      service.getAll();
    })));

  it('should get all data from API backend',
    inject([SignService, MockBackend], fakeAsync((service: SignService, backend: MockBackend) => {
      backend.connections.subscribe((connection: MockConnection) => {
        const data = [
          { id: 1, title: 'Title 1' },
          { id: 2, title: 'Title 2' }
        ];

        const response = new ResponseOptions({ body: JSON.stringify(data) });
        connection.mockRespond(new Response(response));
      });

      service.getAll().subscribe(data => {
        expect(data.length).toBe(2);
      });
    })));
});
