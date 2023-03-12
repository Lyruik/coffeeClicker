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
  (coffeeRiver = {
    name: "Coffee River",
    quantity: 0,
    rate: 20,
    cost: 1000,
    id: 5,
  }),
  (coffeeTycoon = {
    name: "Coffee Tycoon",
    quantity: 0,
    rate: 100,
    cost: 10000,
    id: 6,
  }),
  (coffeePlanet = {
    name: "Coffee Planet",
    quantity: 0,
    rate: 500,
    cost: 100000,
    id: 7,
  }),
  (coffeeGalaxy = {
    name: "Coffee Galaxy",
    quantity: 0,
    rate: 1000,
    cost: 1000000,
    id: 8,
  }),
];

let coffeeCount = 0;
let upgradeMilestone = 10;
let prodBox = document.querySelector(".realProdContainers");
let currentMilestone = 0;
let coffeeRate = 0;
let cps = document.getElementById("rateCounter");
let brew = document.querySelector("img");
let htmlCounter = document.getElementById("coffeeCount");
let startingButton = document.getElementById("restartButton");

startingButton.addEventListener("click", function gameStart() {
  startingButton.textContent = "Restart";
  function coffeePerSecond() {
    coffeeCount += coffeeRate;
    htmlCounter.textContent = `Coffee: ${coffeeCount}`;
    cps.textContent = `${coffeeRate} coffee/second`;
    clearInterval(coffeePerSecond);
    if (coffeeCount === 22775822931 || coffeeCount > 22775822931) {
      alert(
        "You Win! Please reload (or else it will keep telling you 'you win'"
      );
    } else if (
      coffeeCount === upgradeMilestone ||
      coffeeCount > upgradeMilestone
    ) {
      howDo();
    }
  }
  setInterval(coffeePerSecond, 1500);
  function howDo() {
    coffeeCount += 1;
    htmlCounter.textContent = `Coffee: ${coffeeCount}`;
    if (coffeeCount === upgradeMilestone || coffeeCount > upgradeMilestone)
      theNumbersMason();
    function theNumbersMason() {
      for (let o = 0; o < 10; o++) {
        if (
          (coffeeCount === upgradeMilestone ||
            coffeeCount > upgradeMilestone) &&
          currentMilestone < 8
        ) {
          upgradeMilestone = Math.floor(upgradeMilestone ** 1.3);
          console.log(upgradeMilestone);
          currentMilestone++;
          let newSingleProdBox = document.createElement("div");
          prodBox.appendChild(newSingleProdBox);
          newSingleProdBox.className = "singleProdBox";
          let newSingleStageTwo = document.createElement("div");
          newSingleProdBox.appendChild(newSingleStageTwo);
          newSingleStageTwo.className = "topText";
          let newSingleName = document.createElement("div");
          newSingleName.textContent = prodUpgrades[currentMilestone - 1].name;
          newSingleName.className = "topText";
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
              for (let key of prodUpgrades) {
                if (listArray.length < 4) {
                  for (let inKey in key) {
                    let addTo = inKey;
                    listArray.push(addTo);
                  }
                }
                if (valuesArray.length < 5) {
                  for (let h = 0; h < prodUpgrades.length; h++) {
                    for (let valueKey in prodUpgrades[id - 1]) {
                      valuesArray.push(prodUpgrades[id - 1][valueKey]);
                    }
                  }
                }
              }
              if (listArray[i] === undefined) {
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
            if ((startingButton.textContent = "Restart")) {
              startingButton.removeEventListener("click", gameStart);
              startingButton.addEventListener("click", function restarting() {
                coffeeCount = 0;
                coffeeRate = 0;
                htmlCounter.textContent = `Coffee: ${coffeeCount}`;
                cps.textContent = `${coffeeRate} coffee/second`;
                currentMilestone = 0;
                upgradeMilestone = 10;
                prodUpgrades = [
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
                  (coffeeRiver = {
                    name: "Coffee River",
                    quantity: 0,
                    rate: 20,
                    cost: 1000,
                    id: 5,
                  }),
                  (coffeeTycoon = {
                    name: "Coffee Tycoon",
                    quantity: 0,
                    rate: 100,
                    cost: 10000,
                    id: 6,
                  }),
                  (coffeePlanet = {
                    name: "Coffee Planet",
                    quantity: 0,
                    rate: 500,
                    cost: 100000,
                    id: 6,
                  }),
                  (coffeeGalaxy = {
                    name: "Coffee Galaxy",
                    quantity: 0,
                    rate: 1000,
                    cost: 1000000,
                    id: 6,
                  }),
                ];
                newSingleProdBox.remove();
                clearInterval();
                startingButton.removeEventListener("click", restarting);
                startingButton.addEventListener("once", gameStart);
              });
            }
          }
          newButton.addEventListener("click", function (e) {
            let quantCheck = newButton.previousSibling.textContent;
            for (let key of prodUpgrades) {
              for (let info in key) {
                if (key[info] === quantCheck) {
                  if (key.cost <= coffeeCount) {
                    key.quantity++;
                    coffeeCount -= key.cost;
                    htmlCounter.textContent = `Coffee: ${coffeeCount}`;
                    key.cost = Math.floor((key.cost *= 1.2));
                    coffeeRate += key.rate;
                    cps.textContent = `${coffeeRate} coffee/second`;
                    bottomTextStageTwo.replaceChildren();
                    prodBoxUpdates(key.id);
                  } else {
                    console.log("not enough dosh");
                    alert("Not enough coffee");
                  }
                }
              }
            }
          });
        }
      }
    }
  }
  brew.addEventListener("click", howDo);
});

let optionsBtn = document.querySelector("#optionsBtn");

optionsBtn.addEventListener("click", function pullOptions() {
  let optionsBox = document.getElementById("optionsBox");
  optionsBox.style.display = "flex";
  optionsBtn.removeEventListener("click", pullOptions);
  optionsBtn.addEventListener("click", function closeOptions() {
    optionsBox.style.display = "none";
    optionsBtn.addEventListener("click", pullOptions);
  });
});
