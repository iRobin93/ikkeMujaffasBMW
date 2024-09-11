function showView() {
  document.getElementById("app").innerHTML = /*HTML*/ `
        <div>Dette er main view</div>
        <div>${drawBar(kulOMeter, "blue")}</div>
        <div>${drawCar()}</div>
        <div>${showKompisView()}</div>
        <div>${penger}kr</div>
        <div ${hiddenKompisButtons}>
        <button onclick="checkAnswer('Ed')">Hei Ed</button>
        <button onclick="checkAnswer('Chicken')">Hei Kylling</button>
        <button onclick="checkAnswer('Johnny Bravo')">Hei Johnny</button>
         </div>
        <button onclick="buyExpensiveUpgrade()">Oppgrader beste kvalitet</button>
        <button onclick="buyMediumUpgrade()">Oppgrader middels kvalitet</button>
        <button onclick="buyCheapUpgrade()">Oppgrader dårlig kvalitet</button>
        <button onclick="goToGarage(this)">Gå til garasje</button>
    `;
}

function drawBar(percentageFilled) {
  let html = /*HTML*/ `
        <div class="barContainer">
            <div class="barContent" style="width: ${percentageFilled}%"></div>
        </div>
    `;
  return html;
}

function drawCar() {
  let html = `
        <div class="car">Dette er bilen btw
        </div>
    `;
  return html;
}

function showKompisView(kompisName, moneyIncrease, image) {
  document.getElementById("testDiv").innerHTML = /*HTML*/ `
        <div>
        <img src="${showKompis.img}">
        </div>
    `;
}
