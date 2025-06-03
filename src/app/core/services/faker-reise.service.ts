import {Injectable, signal, effect} from '@angular/core';
import {Reise} from '@reisen/models';
import {fakerDE as faker} from '@faker-js/faker';

@Injectable({
    providedIn: 'root'
})
export class FakerReiseService {

    private counter = 0;
    private length = faker.number.int({min: 5, max: 10});

    private readonly reisen = signal<Reise[]>(
        Array.from({length: this.length}, () => this.fakeReise())
    );

    constructor() {
        effect(() => {
            console.log('Reisen updated:', this.reisen());
        });
    }

    getAngebote(): Reise[] {
        return this.reisen();
    }

    changeAngebot(id: number): Reise[] {
        this.reisen.update((current) =>
            current.map((reise, index) =>
                index === id
                    ? {...reise, header: `Item ${reise.id} has changed`}
                    : reise
            )
        );
        return this.reisen();
    }

    addAngebot(): Reise[] {
        const newItem = this.fakeReise();
        this.reisen.update((current) => [...current, newItem]);
        return this.reisen();
    }

    getAll(): Reise[] {
        return this.reisen();
    }

    search(value: string, nights: number): Reise[] {
        const query = value.toLowerCase();
        return this.reisen().filter((reise) =>
            reise.header.toLowerCase().includes(query) &&
            reise.content[0].includes(String(nights))
        );
    }

    private fakeReise(): Reise {
        return {
            id: this.counter++,
            header: faker.location.city(),
            content: [
                `${faker.number.int({min: 1, max: 21})} Nächte`,
                'Flug von Wien'
            ],
            from: new Date(),
            to: new Date(),
            price: faker.number.int({min: 400, max: 1200})
        };
    }
}
