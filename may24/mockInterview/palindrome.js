// Alpharetta is petitioning the NHL to receive an expansion hockey team. The marketing team has decided to have a team name that is a palindrome i.e. is spelled the same forwards and backwards would give the team more appeal. A company example of this is 'SONOS' whose product can be flipped upside down, turned left or right and it still says the company name. Your code should accept a single string and print true if it is a palindrome and false otherwise 

function palindrome(word) {
    if (word.length <= 1 ) return true;
    if (word[0] != word[word.length-1]) return false;
    return palindrome(word.slice(1,-1))
}

console.log(palindrome("racer"))