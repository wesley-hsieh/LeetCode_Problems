/**
 * @param {string} s
 * @return {number}
 */


/*
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

998
1000-100
CM
100-10
XC
5 
V
3
III
CMXCVIII

800 
DCCC

800 = 1000 -200
CCM

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
*/
const ROMAN_NUM_TO_INT_VALUE = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
};

export function romanToInt(x) {
    let value = 0;
    let skipNextLetter = false;

    for (let i = 0; i < x.length; i++) {
        if (skipNextLetter) {
            skipNextLetter = false;
            continue;
        }
        let currLetter = x[i];
        let nextLetter = x[i + 1];

        let currValue = ROMAN_NUM_TO_INT_VALUE[currLetter];
        let nextValue = ROMAN_NUM_TO_INT_VALUE[nextLetter];

        if (nextValue > currValue) {
            //Doing this to handle cases where the roman numeral evalutes to 4 or 9 i.e. IV, IX.
            value += nextValue - currValue;
            //Skip next indice because nextLetter has been used in line above
            skipNextLetter = true;
        }
        else {
            value += currValue;
        }
    }
    return value;
}