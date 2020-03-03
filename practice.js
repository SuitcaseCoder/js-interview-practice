var msg = "hello world";
console.log(msg);


// REVERSE 
function reverse(str){
    return str.split("").reverse().join("");
}

console.log(reverse("hello"));


// PALINDROME 

function isPalindrome(str){
    return str.toLowerCase().split('').reverse().join('') === str.toLowerCase();
}

console.log(isPalindrome("racecAr"));
console.log(isPalindrome("mobile"));


// IS INTEGER

function isInteger(num){
    if(num % 1 === 0 ){
        return true
    } else {
        return false
    }
}

console.log(isInteger(5));
console.log(isInteger(5.17));

//  REVERSE INTEGER

function reverseInt(int){
    const revString = int.toString().split('').reverse().join('');
    
    return parseInt(revString);
}

console.log(reverseInt(12345));

// CAPITALIZE LETTERS

function capitalizeLetters(str){
    return str.toLowerCase().split('').map()
}


