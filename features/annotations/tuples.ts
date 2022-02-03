const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40
};

// type alias
type Drink = [string, boolean, number];

// strict order of elements
const pepsi: Drink = ["brown", true, 40];

const carSpecs: [number, number] = [400, 3354];

const carStats = {
  horsepower: 400,
  weight: 3354
};
