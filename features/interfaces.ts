interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const fizzyPop = {
  color: "brown",
  carbonated: true,
  sugar: 400,
  summary(): string {
    return `My drink has: ${this.sugar} grams of sugar`;
  }
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
  console.log(` Year: ${vehicle.year}`);
  console.log(` Broken: ${vehicle.broken}`);
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printVehicle(oldCivic);

printSummary(oldCivic);
printSummary(fizzyPop);
