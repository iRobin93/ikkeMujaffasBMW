let kulometer;
let penger;
let kompisArray = [
    {
        Name: "Kompis1",
        moneyIncrease: 20
    },
    {
        Name: "Kompis2",
        moneyIncrease: 40
    }
];

let showKompis;

let mekanikerObject = {};
let mekanikere = [];
let pupUpMessage = "";        
        
        //Robin
        setTimeout(getRandomKompis, Math.floor(Math.random()*15000+10000))

        function getRandomKompis() {
            getRandomNr = Math.floor(Math.random()*kompisArray.length)
            
            showKompis = kompisArray[getRandomNr]
            setTimeout(getRandomKompis, Math.floor(Math.random()*15000+10000))
            

            hilsKompis(showKompis.Name, showKompis.moneyIncrease);
        }