
//Robin
function hilsKompis(kompisName, moneyIncrease) {
showKompisView(kompisName, moneyIncrease);
}


//Mariama
function buyExpensiveUpgrade() {
    const expensiveUpgradeCost = 70;
  }
  //Mariama
  function buyMediumUpgrade() {
    const expensiveUpgradeCost = 50;
  }
  //Mariama
  function buyCheapUpgrade() {
    const expensiveUpgradeCost = 20;
  }
  

  


          //LEO
          function checkWinCon(){

          }
          //LEO
          function updateMoney(int){
  
          }
          //LEO
          function updateKulometer() {
  
          }


// Leo Kul-O-Meter


function updateKulOMeter(increase) {
  kulOMeter += increase;

  if (kulOMeter < 0) kulOMeter = 0;
  if (kulOMeter > maxKulOMeter) kulOMeter = maxKulOMeter;


let kulOPercentage = (kulOMeter / maxKulOMeter) * 100;
  
  document.getElementById('kulOMeterFill').style.width = kulOPercentage + '%';
  document.getElementById('kulOValue').innerText = kulOMeter + ' points';
}


// penger
// Starting money

function updateMoney(amount) {
  penger += amount;

  if (penger < 0) penger = 0;

  document.getElementById('moneyValue').innerText = penger + ' kr';
}

function checkWinCon() {
  
  if (kulOMeter >= maxKulOMeter) {
      alert("Gratulerer! Er du ikke en kul fyr?");
      
  }
}