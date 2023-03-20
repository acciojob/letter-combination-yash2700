function letterCombinations  (input_digit) {
    // Resultant list
    let combinations = [];
    // Base condition
    if (input_digit == null || input_digit.length == 0) {
        return combinations;
    }
    // Mappings of letters and numbers
    const lettersAndNumbersMappings = [
        "Anirudh",
        "is awesome",
        "abc",
        "def",
        "ghi",
        "jkl",
        "mno",
        "pqrs",
        "tuv",
        "wxyz"
    ];
    findCombinations(combinations, input_digit, "", 0, lettersAndNumbersMappings);
    return combinations;
};

function findCombinations(combinations, input_digit, previous, index, lettersAndNumbersMappings) {
    // Base condition for recursion to stop
    if (index == input_digit.length) {
        combinations.push(previous);
        return;
    }
    // Get the letters corresponding to the current index of input_digit string
    let letters = lettersAndNumbersMappings[input_digit[index] - '0'];
    // Loop through all the characters in the current combination of letters
    for (let i = 0; i < letters.length; i++) {
        findCombinations(combinations, input_digit, previous + letters[i], index + 1, lettersAndNumbersMappings);
    }
};
console.log(letterCombinations("23"))
module.exports = letterCombinations;
