const Difficulty = {
    EASY: {name : "EASY", multiplier : 1.0},
    NORMAL : {name : "NORMAL", multiplier : 1.5},
    HARD : {name : "HARD", multiplier : 2.0}
};

let currency = 100;
let currentDifficulty = Difficulty.EASY;

function setDifficulty(difficulty) {
    if (Difficulty[difficulty]) {
        currentDifficulty = Difficulty[difficulty]
        return true;
    }
    return false;
}

function getDifficulty() {
    return currentDifficulty;
}

function useCurrency(cost) {
    if (cost > currency) {
        return -1;
    }
    currency -= (cost * currentDifficulty.multiplier);
    return currency;
}

function getCurrency() {
    return currency;
}

function setCurrency(amount) {
   if (amount < 0)
        return -1;
    currency = amount;
    return currency;
}