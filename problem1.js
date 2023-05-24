// Solve of Problem-01;

function mindGame(number){
    const result = (number*3 + 10)/2 - 5;
    return result;
}

const given_number = mindGame(50);
console.log(given_number);