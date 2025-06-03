import {HttpInterceptorFn, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {environment} from '../../../environments/environment';
import {FakerReiseService} from '@core/services/faker-reise.service';
import {inject} from '@angular/core';

const angeboteList = (reiseService: FakerReiseService): Observable<HttpResponse<unknown>> => {
    const angebote = reiseService.getAngebote();
    return of(
        new HttpResponse({
            status: 200,
            body: {
                elements: angebote,
                totoalCount: angebote.length,
            },
        }),
    );
};

const addAngebot = (reiseService: FakerReiseService): Observable<HttpResponse<unknown>> => {
    const angebote = reiseService.addAngebot();
    return of(
        new HttpResponse({
            status: 200,
            body: {
                elements: angebote,
                totoalCount: angebote.length,
            },
        }),
    );
};

const changeAngebot = (reiseService: FakerReiseService, index: number): Observable<HttpResponse<unknown>> => {
    const angebote = reiseService.changeAngebot(index);
    return of(
        new HttpResponse({
            status: 200,
            body: {
                elements: angebote,
                totoalCount: angebote.length,
            },
        }),
    );
};

const searchAngebote = (reiseService: FakerReiseService, name: string, nights: number): Observable<HttpResponse<unknown>> => {
    const angebote = reiseService.search(name, nights);
    return of(
        new HttpResponse({
            status: 200,
            body: {
                elements: angebote,
                totoalCount: angebote.length,
            },
        }),
    );
};

export const mockApiInterceptor: HttpInterceptorFn = (request, next) => {
    const reiseService = inject(FakerReiseService);

    if (environment.mock && new RegExp(`(\\w+)?/api/angebot/cmd/list`).test(request.url)) {
        return angeboteList(reiseService);
    } else if (environment.mock && new RegExp(`(\\w+)?/api/angebot/cmd/add`).test(request.url)) {
        return addAngebot(reiseService);
    } else if (environment.mock && new RegExp(`(\\w+)?/api/angebot/cmd/change`).test(request.url)) {
        const {index} = (request.body as any) || {index: 1};
        return changeAngebot(reiseService, index);
    } else if (environment.mock && new RegExp(`(\\w+)?/api/angebot/cmd/search`).test(request.url)) {
        const {name, nights} = (request.body as any) || {name: 'Test', nights: 2};
        return searchAngebote(reiseService, name, nights);
    }

    return next(request);
};
