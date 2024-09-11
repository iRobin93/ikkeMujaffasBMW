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
        <button onclick="goToGarage(this)">Gå til garasjen</button>

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

function showKompisView() {
  let html = /*HTML*/ `
        <div>
        <img src="${showKompis.img}">
        </div>
    `;
  return html;
}

//Mariama
function goToGarage(button) {
  button.style.display = "none";

  let meny = document.createElement("div");
  meny.innerHTML = /*html*/ `
      <h2>Garasje valg</h2>
      <button onclick="buyExpensiveUpgrade()">Oppgrader beste kvalitet</button>
        <button onclick="buyMediumUpgrade()">Oppgrader middels kvalitet</button>
        <button onclick="buyCheapUpgrade()">Oppgrader dårlig kvalitet</button>
    `;
  document.body.appendChild(meny);
  showView();
}
