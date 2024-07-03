function isPalindrome(word, start, end) {
    if ((start === end)) {
        return true;
    }
    if ((word[start] !== word[end]) || (word.length % 2 === 0)) {
        return false;
    }
    return isPalindrome(word, start + 1, end - 1);
}

const word = "ressasser"
console.log(isPalindrome(word, 0,word.length-1))