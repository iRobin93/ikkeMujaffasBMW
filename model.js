let kulOMeter = 0; 
let maxKulOMeter = 100; 
let penger = 100;
let kompisArray = [
    {
   
        Name: "Chicken",
        moneyIncrease: 20,
        img: "./images/chicken"
    },
    {

        Name: "Johnny Bravo",
        moneyIncrease: 40,
        img: "./images/bravo"
        
    },
    {
        Name: "Ed",
        moneyIncrease: 40,
        img: "./images/ed"
        
    }
];
let showKompis;
let mekanikerObject = {};
let mekanikere = [];
let popUpMessage = "";      
        
        //Robin
        setTimeout(getRandomKompis, Math.floor(Math.random()*15000+10000))

        function getRandomKompis() {
            getRandomNr = Math.floor(Math.random()*kompisArray.length)
            
            showKompis = kompisArray[getRandomNr]
            setTimeout(getRandomKompis, Math.floor(Math.random()*15000+10000))
            

            hilsKompis(showKompis.Name, showKompis.moneyIncrease);
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