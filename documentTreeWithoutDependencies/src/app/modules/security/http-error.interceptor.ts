import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ApiService } from '../api/boundaries/api.service';
import { ApiError } from '../api/models/api-error';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

    constructor(private apiService: ApiService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                retry(1),
                catchError((error: HttpErrorResponse) => {
                    console.log('interceptor', error);

                    if (error.url.indexOf('/auth/') > 0) {
                        location.reload();
                    }

                    const apiError: ApiError = {
                        status: error.status,
                        message: error.error ? error.error.message || error.statusText : error.statusText,
                        messageInterpolateParams: error.error ? error.error.messageInterpolateParams : undefined,
                        errorCode: error.error ? error.error.code : undefined
                      };

                    this.apiService.onError.emit(apiError);

                    let errorMessage = '';
                    if (error.error instanceof ErrorEvent) {
                        // client-side error
                        errorMessage = `Error: ${error.error.message}`;
                    } else {
                        // server-side error
                        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
                    }
                    console.error(errorMessage);

                    return of(null);
                })
            );
    }
}
