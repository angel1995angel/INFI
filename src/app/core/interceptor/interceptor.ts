export interface Interceptor {}
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class Interceptor implements HttpInterceptor {
  headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*' });
  constructor() {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    req = req.clone({
      setHeaders: {
        Accept: 'application/json',
      },
    });
    return next.handle(req);
  }
}
