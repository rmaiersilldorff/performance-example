import {HttpInterceptorFn, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {environment} from '../../environments/environment';

const bookingList = (): Observable<HttpResponse<unknown>> => {
    return of(
        new HttpResponse({
            status: 200,
            body: {
                elements: [],
                totoalCount: 0,
            },
        }),
    );
};

export const mockApiInterceptor: HttpInterceptorFn = (request, next) => {
    if (environment.mock && new RegExp(`(\\w+)?/api/angebote/list`).test(request.url)) {
        return bookingList();
    }

    return next(request);
};
