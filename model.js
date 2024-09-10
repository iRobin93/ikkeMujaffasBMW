let kulometer;
let penger;
let kompisArray = [];
let kompisObject = {};
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