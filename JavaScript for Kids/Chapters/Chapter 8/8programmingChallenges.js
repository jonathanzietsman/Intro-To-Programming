// 1: Doing Arithmetic With Finctions
let add = function( operand1, operand2) {
    return operand1 + operand2;
};

let multiply = function(operand1, operand2 ){
    return operand1 * operand2;
};

console.log((add(multiply(36325, 9824), 777)));

// 2: Are These Arrays The Same?
let areArraysSame = function(array1, array2){
    if  (array1.length === array2.length && JSON.stringify(array1) === JSON.stringify(array2)) {
        return true;
    }
    else{
        return false
    }
;
}
areArraysSame([1, 2, 3], [4, 5, 6])

// 3: Hangman, Using Functions
