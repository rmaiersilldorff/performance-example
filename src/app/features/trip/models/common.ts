import {TravelOfferDetailsDto, PageDtoTravelOffersDetailsDto} from '@trip/api';

export function mapToTripResult(pageDto: PageDtoTravelOffersDetailsDto): TripResult {
  const elements: Trip[] = mapToTripList(pageDto.elements);
  return {
    elements,
    totalCount: pageDto.totalCount,
  };
}

export function mapToTripList(elements: TravelOfferDetailsDto[]): Trip[] {
    return elements.map((travelOffer: TravelOfferDetailsDto) => ({
        ...travelOffer,
        from: new Date(travelOffer.from),
        to: new Date(travelOffer.to),
    }));
}

export type Trip = Omit<TravelOfferDetailsDto, 'from' | 'to'> & {
  from: Date;
  to: Date;
};


export interface TripResult {
  elements: Trip[];
  totalCount: number;
}

export interface Basket {
    items: Trip[];
}

