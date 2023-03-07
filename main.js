let prodUpgrades = [
  (chemex = {
    name: "Chemex",
    quantity: 0,
    rate: 1,
    cost: 10,
  }),
  (frenchPress = {
    name: "French Press",
    quantity: 0,
    rate: 1,
    cost: 50,
  }),
  (mrCoffee = {
    name: "Chemex",
    quantity: 0,
    rate: 1,
    cost: 100,
  }),
];
//   },
//   let chemex = {
//     name: "Chemex",
//     quantity: 0,
//     rate: 1,
//     cost: 10,
//   },
//   let Chemex = {
//     name: "Chemex",
//     quantity: 0,
//     rate: 1,
//     cost: 10,
//   },
//   let Chemex = {
//     name: "Chemex",
//     quantity: 0,
//     rate: 1,
//     cost: 10,
//   },

let coffeeCount = 0;
let upgradeMilestone = 10;
let brew = document.querySelector("img");
let htmlCounter = document.getElementById("coffeeCount");

brew.addEventListener("click", function () {
  coffeeCount++;
  console.log(coffeeCount);
  htmlCounter.textContent = `Coffee: ${coffeeCount}`;
  if (coffeeCount === upgradeMilestone) {
    let newProducer = document.createElement("div");
    prodBox.appendChild(newProducer);
    newProducer.textContent = prodUpgrades[0].name;
    for (let key of prodUpgrades) {
      console.log(key.cost, "gurl what");
    }
  }
});

let prodBox = document.getElementById("producerBox");

console.log(prodUpgrades);
console.log(coffeeCount);
