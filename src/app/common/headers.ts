import { Headers } from '@angular/http';

export let contentHeaders = new Headers();
contentHeaders.append('Accept', 'application/json');
contentHeaders.append('Content-Type', 'application/json');
// contentHeaders.append('Authorization', localStorage.getItem('id_token'));
