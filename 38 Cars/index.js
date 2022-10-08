function stroreCarInfo(Man, model, ...others) {
  let carOBJ = {
    manufacturere: Man,
    model: model,
  };
  for (const [key, value] of Object.entries(others)) {
    carOBJ.key = value;
  }
  return carOBJ;
}
let newObjCar1 = stroreCarInfo("BMW", "1995", {
  color: "Gray",
  gears: "Manual",
});
console.log(newObjCar1);

let newObjCar2 = stroreCarInfo("Ferrai", "1998", {
  color: "Red",
  gears: "Auto",
});
console.log(newObjCar2);
