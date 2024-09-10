showView();
function showView() {
    document.getElementById("app").innerHTML = /*HTML*/ `
        <div>Dette er main view</div>
       
        <div> ${drawBar(50,"blue")}</div>
    `
}


function drawBar(percentageFilled, color) {
    let barColor = 'lightblue';
 
    let html = `
        <div class="barContainer">
            <div class="barContent" style="width: ${percentageFilled}%; background-color: ${barColor}"></div>
        </div>
    `;
    return html;
}