/*global angular*/
(function(){
    var app = angular.module('carRental', []);
    app.controller('CarRentController', function(){
        this.products = cars;
    });
    
    var cars = [
        {
            name:'Economy Cars',
            rentPrice: 50.00,
            available: 8,
            image: "economyCar.jpg",
            description: "Radio, CD, Anti-Theft Device, Anti-Skid Device, Central Locking, Cruise Control, Driver Airbag, Dual Airbags, Power Mirrors, Power Steering, Power Windows, Tilt Steering",
            mileage: "35 mpg/better",
            canRent: true,
            unavailable: true
        },
        {
            name:'Compact Cars',
            rentPrice: 70.00,
            available: 10,
            image: "compactCar.PNG",
            description: "Comfortable car with 5 seater, 2 Large Suitcases, 1 Small Suitcase, Automatic Transmission, Air Conditioning, Dual Airbags, ABS, V6 Engine",
            mileage: "30 mpg/better",
            canRent: true,
            unavailable: true
        },
        {
            name:'Midsize Cars',
            rentPrice: 100.00,
            available: 12,
            image: "midsizeCar.PNG",
            description: " Comfortable car with 7 seater, 2 Large Suitcases, 2 Small Suitcase, Automatic Transmission, Air Conditioning, Dual Airbags, ABS, GPS Navigator",
            mileage: "29 mpg/better",
            canRent: true,
            unavailable: true
        },
        {
            name:'Luxury Cars',
            rentPrice: 200.00,
            available: 5,
            image: "luxuryCar.PNG",
            description: " Luxury car with 4 passenger seats , 2 Small Suitcases, Automatic Transmission, Air Conditioning, Dual Airbags, ABS, GPS Navigator, smooth rider",
            mileage: "23 mpg/better",
            canRent: true,
            unavailable: true
        }
        ];
})();