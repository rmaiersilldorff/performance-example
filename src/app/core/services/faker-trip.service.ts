import {Injectable, signal, effect} from '@angular/core';
import {Trip} from '@trip/models';
import {fakerDE as faker} from '@faker-js/faker';

@Injectable({
    providedIn: 'root',
})
export class FakerTripService {
    private counter = 0;
    private length = faker.number.int({min: 5, max: 10});

    private readonly trips = signal<Trip[]>(Array.from({length: this.length}, () => this.fakeTrip()));

    constructor() {
        effect(() => {
            console.log('Reisen updated:', this.trips());
        });
    }

    getTravelOffer(): Trip[] {
        return this.trips();
    }

    changeTravelOffer(id: number): Trip[] {
        this.trips.update((current) => current.map((reise, index) => (index === id ? {...reise, header: `Item ${reise.id} has changed`} : reise)));
        return this.trips();
    }

    addTravelOffer(): Trip[] {
        const newItem = this.fakeTrip();
        this.trips.update((current) => [...current, newItem]);
        return this.trips();
    }

    getAll(): Trip[] {
        return this.trips();
    }

    search(value: string, nights: number): Trip[] {
        const query = value.toLowerCase();
        return this.trips().filter((reise) => reise.header.toLowerCase().includes(query) && reise.content[0].includes(String(nights)));
    }

    private fakeTrip(): Trip {
        return {
            id: this.counter++,
            header: faker.location.city(),
            content: [`${faker.number.int({min: 1, max: 21})} Nächte`, 'Flug von Wien'],
            from: new Date(),
            to: new Date(),
            price: faker.number.int({min: 400, max: 1200}),
        };
    }
}
