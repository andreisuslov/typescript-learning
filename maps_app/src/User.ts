import faker from 'faker';
import { Mappable } from './CustomMap';

export class User implements Mappable { // TS will help us satisfy the Mappable interface
    name: string;
    location: { // an object with 2 properties
        lat: number;
        lng: number;
    };

    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()), // parseFloat() method converts string to number
            lng: parseFloat(faker.address.longitude())
        };
    }

    // adding this method to satisfy the Mappable interface
    markerContent(): string {
        return `User Name: ${this.name}` // using template string to inject this.name
    }
}
