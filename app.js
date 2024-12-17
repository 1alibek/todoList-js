class Transport {
  constructor(name, speed, capacity) {
    this.name = name; 
    this.speed = speed; 
    this.capacity = capacity; 
  }

  start() {
    console.log(`${this.name} harakatga tushdi.`);
  }

  stop() {
    console.log(`${this.name} to'xtadi.`);
  }
}
class Car extends Transport {
  constructor(name, speed, capacity, fuelType) {
    super(name, speed, capacity);
    this.fuelType = fuelType; 
  }

  driveMode(mode) {
    console.log(`${this.name} ${mode} rejimida harakatlanmoqda.`);
  }
}
class Airplane extends Transport {
  constructor(name, speed, capacity, altitude) {
    super(name, speed, capacity);
    this.altitude = altitude; 
  }

  fly() {
    console.log(
      `${this.name} ${this.altitude} metr balandlikda parvoz boshladi.`
    );
  }
}

class Ship extends Transport {
  constructor(name, speed, capacity, cargoCapacity) {
    super(name, speed, capacity);
    this.cargoCapacity = cargoCapacity; 
  }

  sail() {
    console.log(
      `${this.name} ${this.cargoCapacity} tonna yuk bilan suzishni boshladi.`
    );
  }
}
const myCar = new Car("BMW M5 CS", 350, 5, "elektr");
myCar.start();
myCar.driveMode("sport+");
myCar.stop();
const myPlane = new Airplane("Boeing 747", 900, 400, 10000);
myPlane.start();
myPlane.fly();
myPlane.stop();
const myShip = new Ship("Titanic", 40, 3000, 50000);
myShip.start();
myShip.sail();
myShip.stop();
