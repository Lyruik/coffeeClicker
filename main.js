let prodUpgrades = [
  (chemex = {
    name: "Chemex",
    quantity: 0,
    rate: 1,
    cost: 10,
    id: 1,
  }),
  (frenchPress = {
    name: "French Press",
    quantity: 0,
    rate: 2,
    cost: 50,
    id: 2,
  }),
  (mrCoffee = {
    name: "Mr. Coffee",
    quantity: 0,
    rate: 5,
    cost: 100,
    id: 3,
  }),
  (coffeeFountain = {
    name: "Coffee Fountain",
    quantity: 0,
    rate: 10,
    cost: 500,
    id: 4,
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

    function prodBoxUpdates(id) {
      if (id === undefined) {
        id = currentMilestone;
      }
      for (let i = 0; i < 3; i++) {
        let listArray = [];
        let valuesArray = [];
        let botTextAdd = document.createElement("div");
        for (let key in prodUpgrades[id]) {
          for (let inKey of key) {
            if (listArray.length < 3) {
              listArray.push(key);
              console.log(listArray, key, "HELP ME");
              break;
            }
            if (valuesArray.length < 5) {
              for (let h = 0; h < prodUpgrades.length; h++) {
                for (let valueKey in prodUpgrades[id - 1]) {
                  console.log(valueKey);
                  valuesArray.push(prodUpgrades[id - 1][valueKey]);
                }
              }
            }
          }
        }
        if (listArray[i + 1] === undefined) {
          console.log("YOU GOOFED", i, listArray);
          botTextAdd.textContent =
            listArray[i][0].charAt(0).toUpperCase() +
            listArray[i].slice(1) +
            ":" +
            ` ${valuesArray[i + 1]}`;
          bottomTextStageTwo.appendChild(botTextAdd);
          botTextAdd.className = "bottomText";
        } else {
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
    newButton.addEventListener("click", function (e) {
      let quantCheck = newButton.previousSibling.textContent;
      for (let key of prodUpgrades) {
        // console.log(key);
        for (let info in key) {
          // console.log(key[info] === "Chemex", key.quantity);
          if (key[info] === quantCheck) {
            if (key.cost <= coffeeCount) {
              key.quantity++;
              coffeeCount -= key.cost;
              htmlCounter.textContent = `Coffee: ${coffeeCount}`;
              key.cost = Math.floor((key.cost *= 1.2));
              coffeeRate += key.rate;
              cps.textContent = `${coffeeRate} coffee/second`;
              // console.log(coffeeRate, key.id, "HUELO");
              bottomTextStageTwo.replaceChildren();
              prodBoxUpdates(key.id);
            } else {
              console.log("not enough dosh");
            }
          }
        }
      }
    });
  }
});
function coffeePerSecond() {
  coffeeCount += coffeeRate;
  htmlCounter.textContent = `Coffee: ${coffeeCount}`;
}
setInterval(coffeePerSecond, 1000);
