import faker from 'faker';

export class User {
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
}
