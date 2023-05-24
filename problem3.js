// Solve of problem3............

function isLGSeven(number){
    const result = number - 7;
    if(result < 7){
        return result
    }
    else{
        return number*2;
    }
}
const given_number = isLGSeven(-15);
console.log(given_number);