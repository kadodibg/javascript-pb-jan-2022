function harvest(input) {
  let area = Number(input[0]);
  let grape = Number(input[1]);
  let quantity = Number(input[2]);
  let workers = Number(input[3]);
  let liter = (area * grape * 0.4) / 2.5;
  let diff = quantity - liter;
  if (liter < quantity) {
    console.log(
      `It will be a tough winter! More ${Math.floor(diff)} liters wine needed.`
    );
  } else {
    let wineLess = Math.ceil(liter - quantity);
    let wineForWorkers = Math.ceil(wineLess / workers);
    console.log(
      `Good harvest this year! Total wine: ${Math.floor(liter)} liters.`);
    console.log(
      `${wineLess} liters left -> ${wineForWorkers} liters per person.`);
  }
}
harvest(["1020", "1.5", "425", "4"]);
