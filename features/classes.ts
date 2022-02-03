class Vehicle {
  constructor(public color: string) {
    this.color = color;
  }

  protected honk(): void {
    console.log("beep");
  }
}

class Automobile extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  public drive(): void {
    console.log("vroom");
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Automobile(4, "red");
vehicle.startDrivingProcess();
