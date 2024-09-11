//Robin
function hilsKompis() {
  showView();
}

function testIfKompisClickedTimer() {
  if (hiddenKompisButtons == "") {
    penger -= showKompis.moneyIncrease;
    showKompis = {
      Name: "",
      moneyIncrease: 0,
      img: "",
    };

    hiddenKompisButtons = "hidden";
  }
  showView();
}

showView();
function checkAnswer(name) {
  if (name == showKompis.Name) penger += showKompis.moneyIncrease;
  else penger -= showKompis.moneyIncrease;
  showKompis = {
    Name: "",
    moneyIncrease: 0,
    img: "",
  };

  hiddenKompisButtons = "hidden";
  showView();
}

//Mariama
function buyExpensiveUpgrade() {
  const expensiveUpgradeCost = 70;
  if (penger >= expensiveUpgradeCost) {
    penger -= expensiveUpgradeCost;
  } else {
    alert("Det koster å være storkar, og det er ikke du!");
  }
}
//Mariama
function buyMediumUpgrade() {
  const expensiveUpgradeCost = 50;
  if (penger >= expensiveUpgradeCost) {
    penger -= expensiveUpgradeCost;
  } else {
    alert("Du trenger mer penger, prøv noe billigere!");
  }
}
//Mariama
function buyCheapUpgrade(kvalitet) {
  const expensiveUpgradeCost = 20;

  let kulPoints;
  if (kvalitet === "lav") {
    costs = 50;
    kulPoints = 10;
  }

  if (penger >= expensiveUpgradeCost && kvalitet === "lav") {
    penger -= expensiveUpgradeCost;
    kulOMeter += kulPoints;
  } else {
    alert("Skaff det no cash!");
  }
}

// Leo Kul-O-Meter

function updateKulOMeter(increase) {
  kulOMeter += increase;

  if (kulOMeter < 0) kulOMeter = 0;
  if (kulOMeter > maxKulOMeter) kulOMeter = maxKulOMeter;

  let kulOPercentage = (kulOMeter / maxKulOMeter) * 100;

  document.getElementById("kulOMeterFill").style.width = kulOPercentage + "%";
  document.getElementById("kulOValue").innerText = kulOMeter + " points";
}

// penger
// Starting money

function updateMoney(amount) {
  penger += amount;

  if (penger < 0) penger = 0;

  document.getElementById("moneyValue").innerText = penger + " kr";
}

function checkWinCon() {
  if (kulOMeter >= maxKulOMeter) {
    alert("Gratulerer! Er du ikke en kul fyr?");
  }
}
