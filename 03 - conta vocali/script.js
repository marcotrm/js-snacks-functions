/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

// Dichiara la funzione qui.

function countVowels(word) {
    let count = 0;
    for (let i = 0; i < word.length; i++){
        if ('aeiou'.includes(word[i].toLowerCase())) {
            count++;
            }
            }
            return count;
            }
// Invoca la funzione qui e stampa il risultato in console

console.log(countVowels(word)); // Output: 4

//Risultato atteso se si passa 'javascript': 3 (a, a, i)