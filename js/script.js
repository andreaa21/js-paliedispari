/* **Palidroma**
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/



const parolaInserita = prompt('Inserisci una parola');
let secondaParola = (invertiParola(parolaInserita));
console.log(secondaParola);


if (parolaInserita === secondaParola){
    console.log('la parola inserita è un palindromo');
}else{
    console.log('la parola inserita non è un palindromo');
}




function invertiParola (parolaInserita){
    let parolaInversa = "";

    for(let i = parolaInserita.length -1; i >= 0; i--){
        parolaInversa += parolaInserita[i];
    }
    return parolaInversa;
}














































// -----------------------------------------------------------------

/* **Pari e Dispari**
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/
