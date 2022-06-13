const vowels = ["a", "e", "i", "o", "u"]

function countVowel(str) {
    let count = 0;
    
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }

    return count
}

let btResultado = document.getElementById("btnCalcular")

const string = prompt('Enter a string: ');

const result = countVowel(string);

console.log(result);
