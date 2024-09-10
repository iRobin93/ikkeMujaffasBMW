showView();
function showView() {
    document.getElementById("app").innerHTML = /*HTML*/ `
        <div>Dette er main view</div>
        <div>${popUpMessage}</div>
        <div> ${drawBar(kulometer,"blue")}</div>
        <div>${drawCar()}</div>
        <div>${penger}kr</div>
        <button onclick="buyExpensiveUpgrade()">Oppgrader beste kvalitet</button>
        <button onclick="buyMediumUpgrade()">Oppgrader middels kvalitet</button>
        <button onclick="buyCheapUpgrade()">Oppgrader dårlig kvalitet</button>
    `
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