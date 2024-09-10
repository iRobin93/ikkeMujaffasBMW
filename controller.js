//Robin
function hilsKompis(kompisName, moneyIncrease, image) {
  showKompisView(kompisName, moneyIncrease, image);
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
function buyCheapUpgrade() {
  const expensiveUpgradeCost = 20;
  if (penger >= expensiveUpgradeCost) {
    penger -= expensiveUpgradeCost;
  } else {
    alert("Skaff det no cash!");
  }
}

//LEO
function checkWinCon() {}
//LEO
function updateMoney(int) {}
//LEO
function updateKulometer() {}

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
