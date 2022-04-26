export class CustomMap {
    private googleMap: google.maps.Map; // property - variable referencing the instanse of google.maps.Map class
    // private means anyone else who's using this classs cannot reach the instance and try to handle it on google map

    constructor() {
        this.googleMap = new google.maps.Map(document.getElementById('map'), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }
}