let kulOMeter = 0; 
let maxKulOMeter = 100; 
let penger = 100;
let hiddenKompisButtons = "hidden";
let kompisArray = [
    {
   
        Name: "Chicken",
        moneyIncrease: 20,
        img: "./images/chicken.png"
    },
    {

        Name: "Johnny Bravo",
        moneyIncrease: 40,
        img: "./images/bravo.png"
        
    },
    {
        Name: "Ed",
        moneyIncrease: 30,
        img: "./images/ed.png"
        
    }
];
let showKompis = {Name: "",
    moneyIncrease: 0,
    img: ""
}
let mekanikerObject = {};
let mekanikere = [];
let popUpMessage = "";      
        
        //Robin
        setTimeout(getRandomKompis, Math.floor(Math.random()*1500))

        function getRandomKompis() {
            getRandomNr = Math.floor(Math.random()*kompisArray.length)
            hiddenKompisButtons = "";
            showKompis = kompisArray[getRandomNr]
            setTimeout(getRandomKompis, Math.floor(Math.random()*15000+10000))
            
            setTimeout(testIfKompisClickedTimer, 5000);

            hilsKompis();
        }

// Leo
// kul-o-meter



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