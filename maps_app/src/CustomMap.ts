/// <reference types="@types/google.maps" />
// import { User } from './User';
// import { Company } from './Company';

// Instructions to every other class on how they can ba an argumant to 'addMarker' method
export interface Mappable { // export statement allows other classes to access this interface and refer to it as a separate type 
    location: {
        lat: number;
        lng: number;
    };
    // in order to be considered mappable, an object must have a property markerContent() that returns a string
    markerContent(): string;

}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

//addUserMarker and addCompanyMarker methods are awfully similar to each other


//   addUserMarker(user: User): void {
//     new google.maps.Marker({
//       map: this.googleMap,
//       position: {
//         lat: user.location.lat,
//         lng: user.location.lng,
//       },
//     });
//   }
//   addCompanyMarker(company: Company): void {
//     new google.maps.Marker({
//         map: this.googleMap,
//         position: {
//           lat: company.location.lat,
//           lng: company.location.lng,
//         },
//       });
//   }

// this is one possible solution. note: it's not great because it is not scalable and it introduces very tight coupling between 
// addMarker(mappable: User | Company): void {
//     new google.maps.Marker({
//         map: this.googleMap,
//         position: {
//         lat: mappable.location.lat,
//         lng: mappable.location.lng,
//         },
//     });
// }

// scalable solution of adding marker
addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener('click', () => {
        const infoWindow = new google.maps.InfoWindow({
            content: mappable.markerContent(),
        });

        infoWindow.open(this.googleMap, marker);
    })
  }
}
