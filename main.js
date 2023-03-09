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
    rate: 2,
    cost: 50,
  }),
  (mrCoffee = {
    name: "Mr. Coffee",
    quantity: 0,
    rate: 5,
    cost: 100,
  }),
  (coffeeFountain = {
    name: "Coffee Fountain",
    quantity: 0,
    rate: 10,
    cost: 500,
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
let upgradeMilestone = 1;
let brew = document.querySelector("img");
let htmlCounter = document.getElementById("coffeeCount");
let prodBox = document.querySelector(".realProdContainers");
let currentMilestone = 0;
let coffeeRate = 0;
let cps = document.getElementById("rateCounter");

brew.addEventListener("click", function () {
  coffeeCount += 10;
  // console.log(coffeeCount);
  htmlCounter.textContent = `Coffee: ${coffeeCount}`;
  if (coffeeCount === upgradeMilestone || coffeeCount > upgradeMilestone) {
    upgradeMilestone = upgradeMilestone * 4;
    currentMilestone++;
    let newSingleProdBox = document.createElement("div");
    prodBox.appendChild(newSingleProdBox);
    newSingleProdBox.className = "singleProdBox";
    let newSingleStageTwo = document.createElement("div");
    newSingleProdBox.appendChild(newSingleStageTwo);
    newSingleStageTwo.className = "topText";
    let newSingleName = document.createElement("div");
    newSingleName.textContent = prodUpgrades[currentMilestone - 1].name;
    newSingleStageTwo.appendChild(newSingleName);
    let newButton = document.createElement("button");
    newSingleStageTwo.appendChild(newButton);
    newButton.textContent = "Buy";
    newButton.className = "topText";
    let addBottomText = document.createElement("div");
    addBottomText.className = "bottomText";
    newSingleProdBox.appendChild(addBottomText);
    let bottomTextStageTwo = document.createElement("div");
    addBottomText.appendChild(bottomTextStageTwo);
    prodBoxUpdates();
    newButton.addEventListener("click", function (e) {
      let quantCheck = newButton.previousSibling.textContent;
      for (let key of prodUpgrades) {
        console.log(key);
        for (let info in key) {
          console.log(key[info] === "Chemex", key.quantity);
          if (key[info] === quantCheck) {
            if (key.cost === coffeeCount || key.cost < coffeeCount) {
              key.quantity++;
              coffeeCount -= key.cost;
              htmlCounter.textContent = `Coffee: ${coffeeCount}`;
              key.cost = Math.floor((key.cost *= 1.2));
              coffeeRate += key.rate;
              cps.textContent = `${coffeeRate} coffee/second`;

              console.log(coffeeRate);
              bottomTextStageTwo.replaceChildren();
              prodBoxUpdates();
            } else {
              console.log("not enough dosh");
            }
          }
        }
      }
    });
    function prodBoxUpdates() {
      for (let i = 0; i < 3; i++) {
        let listArray = [];
        let valuesArray = [];
        let botTextAdd = document.createElement("div");
        for (let key of prodUpgrades) {
          for (let inKey in key) {
            if (listArray.length < 4) {
              for (let j = 0; j < 3; j++) {
                listArray.push(inKey);

                break;
              }
            }
            if (valuesArray.length < 4) {
              for (let h = 0; h < 3; h++) {
                for (let valueKey in prodUpgrades[currentMilestone - 1]) {
                  valuesArray.push(
                    prodUpgrades[currentMilestone - 1][valueKey]
                  );
                }
              }
            }
          }
        }
        botTextAdd.textContent =
          listArray[i + 1][0].charAt(0).toUpperCase() +
          listArray[i + 1].slice(1) +
          ":" +
          ` ${valuesArray[i + 1]}`;
        bottomTextStageTwo.appendChild(botTextAdd);
        botTextAdd.className = "bottomText";
      }
    }
  }
});

function coffeePerSecond () {
  
    coffeeCount += coffeeRate;
    htmlCounter.textContent = `Coffee: ${coffeeCount}`;
    console.log(coffeeCount);
  }

setInterval(coffeePerSecond, 1000);

// console.log(prodUpgrades);
// console.log(coffeeCount);

// let firstAdd = document.createElement("div");
// firstAdd.textContent = prodUpgrades[currentMilestone].name;
// prodBox.appendChild(firstAdd);
// currentMilestone++;
// upgradeMilestone++;
// console.log(firstAdd.textContent);
