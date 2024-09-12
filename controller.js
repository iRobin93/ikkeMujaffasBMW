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
  const expensiveUpgradeCost = 80;
  if (penger >= expensiveUpgradeCost) {
    penger -= expensiveUpgradeCost;
    kulOMeter += 30;
  } else {
    alert("Det koster å være storkar, og det er ikke du!");
  }

  document.getElementById("garage").innerHTML = "";
  hiddenGarage = "";
  hiddenGarage2 = "hidden";
  showView();
}
//Mariama
function buyMediumUpgrade() {
  const expensiveUpgradeCost = 60;
  if (penger >= expensiveUpgradeCost) {
    penger -= expensiveUpgradeCost;
    kulOMeter += 15;
  } else {
    alert("Du trenger mer penger, prøv noe billigere!");
  }
  document.getElementById("garage").innerHTML = "";
  hiddenGarage = "";
  hiddenGarage2 = "hidden";
  showView();
}
//Mariama
function buyCheapUpgrade(kvalitet) {
  const expensiveUpgradeCost = 40;

  if (penger >= expensiveUpgradeCost) {
    penger -= expensiveUpgradeCost;
    kulOMeter += 5;
  } else {
    alert("Skaff det no cash!");
  }
  document.getElementById("garage").innerHTML = "";
  hiddenGarage = "";
  hiddenGarage2 = "hidden";
  showView();
}

function outOfGarage() {
  document.getElementById("garage").innerHTML = "";
  hiddenGarage = "";
  hiddenGarage2 = "hidden";
  showView();
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
setInterval(checkWinCon, 16);
function checkWinCon() {
  if (kulOMeter > maxKulOMeter) {
    kulOMeter = 100;
    showView();
    setTimeout(winConAlert, 10);
  }
}

function winConAlert() {
  alert("Gratulerer! Er du ikke en kul fyr?");
}
