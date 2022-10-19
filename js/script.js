/* **Palidroma**
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/



// const parolaInserita = prompt('Inserisci una parola');
// let secondaParola = (invertiParola(parolaInserita));
// console.log(secondaParola);


// if (parolaInserita === secondaParola){
//     console.log('la parola inserita è un palindromo');
// }else{
//     console.log('la parola inserita non è un palindromo');
// }




// function invertiParola (parolaInserita){
//     let parolaInversa = "";

//     for(let i = parolaInserita.length -1; i >= 0; i--){
//         parolaInversa += parolaInserita[i];
//     }
//     return parolaInversa;
// }





// ------------------------------------------------------------------





/* **Pari e Dispari**
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/

const userInput = prompt('scegli pari o dispari');
console.log('il giocatore ha scelto:', userInput);
const userNumber = parseInt(prompt('scegli un numero da 1 a 5'));
console.log(userNumber);
let cpuNumber = getRandomNumber(1 , 5);
console.log(cpuNumber);
let sum = userNumber + cpuNumber;
console.log('la somma dei numeri è:', sum);
let sumOutput = checkSomma(sum);



if(userInput === 'pari' && sumOutput === 'pari'){
    console.log('hai vinto');
}else if(userInput === 'dispari' && sumOutput === 'dispari'){
    console.log('hai vinto');
}else{
    console.log('hai perso');
}







function getRandomNumber(min, max){
    const randomNumber = Math.floor(Math.random() * (max - min +1)) + min;
    return randomNumber;
}

function checkSomma (sum){
    if (sum % 2 === 0){
        return 'pari'
    }else{
        return 'dispari'
    }
 
}
