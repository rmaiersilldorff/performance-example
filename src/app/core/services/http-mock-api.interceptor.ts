import {HttpInterceptorFn, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {environment} from '../../../environments/environment';
import {FakerTripService} from './faker-trip.service';
import {inject} from '@angular/core';

const travelOfferList = (tripService: FakerTripService): Observable<HttpResponse<unknown>> => {
    const travelOffer = tripService.getTravelOffer();
    return of(
        new HttpResponse({
            status: 200,
            body: {
                elements: travelOffer,
                totoalCount: travelOffer.length,
            },
        }),
    );
};

const addAngebot = (tripService: FakerTripService): Observable<HttpResponse<unknown>> => {
    const travelOffer = tripService.addTravelOffer();
    return of(
        new HttpResponse({
            status: 200,
            body: {
                elements: travelOffer,
                totoalCount: travelOffer.length,
            },
        }),
    );
};

const changeAngebot = (tripService: FakerTripService, index: number): Observable<HttpResponse<unknown>> => {
    const travelOffer = tripService.changeTravelOffer(index);
    return of(
        new HttpResponse({
            status: 200,
            body: {
                elements: travelOffer,
                totoalCount: travelOffer.length,
            },
        }),
    );
};

const searchtravelOffer = (tripService: FakerTripService, name: string, nights: number): Observable<HttpResponse<unknown>> => {
    const travelOffer = tripService.search(name, nights);
    return of(
        new HttpResponse({
            status: 200,
            body: {
                elements: travelOffer,
                totoalCount: travelOffer.length,
            },
        }),
    );
};

export const mockApiInterceptor: HttpInterceptorFn = (request, next) => {
    const tripService = inject(FakerTripService);

    if (environment.mock && new RegExp(`(\\w+)?/api/offer/cmd/list`).test(request.url)) {
        return travelOfferList(tripService);
    } else if (environment.mock && new RegExp(`(\\w+)?/api/offer/cmd/add`).test(request.url)) {
        return addAngebot(tripService);
    } else if (environment.mock && new RegExp(`(\\w+)?/api/offer/cmd/change`).test(request.url)) {
        const {index} = (request.body as any) || {index: 1};
        return changeAngebot(tripService, index);
    } else if (environment.mock && new RegExp(`(\\w+)?/api/offer/cmd/search`).test(request.url)) {
        const {name, nights} = (request.body as any) || {name: 'Test', nights: 2};
        return searchtravelOffer(tripService, name, nights);
    }

    return next(request);
};
