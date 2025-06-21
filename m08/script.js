function Hotel(name, rooms, booked) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;

  this.checkAvailability = function () {
    return this.rooms - this.booked;
  };
}

var quayHotel = new Hotel('Quay', 40, 25);
var parkHotel = new Hotel('Park', 120, 77);
var sunsetHotel = new Hotel('Sunset', 86, 10); // New 3rd hotel

document.getElementById('hotel1').textContent =
  quayHotel.name + ': ' + quayHotel.checkAvailability() + ' rooms left';

document.getElementById('hotel2').textContent =
  parkHotel.name + ': ' + parkHotel.checkAvailability() + ' rooms left';

document.getElementById('hotel3').textContent =
  sunsetHotel.name + ': ' + sunsetHotel.checkAvailability() + ' rooms left';

