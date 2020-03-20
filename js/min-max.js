var calcInput = document.getElementById('calcInput');
var maxOutput = document.getElementById('maxOutput');
var minOutput = document.getElementById('minOutput');
var sumOutput = document.getElementById('sumOutput');
var avgOutput = document.getElementById('avgOutput');
var reverseOutput = document.getElementById('reverseOutput');
function resetOutput(){
    calcInput.textContent ='-'; 
    maxOutput.textContent ='-'; 
    minOutput.textContent ='-'; 
    sumOutput.textContent ='-'; 
    avgOutput.textContent ='-'; 
    reverseOutput.textContent ='-'; 
}
function inputParser(str){
    var inputArr = str.split(',');
    console.log(inputArr);
    var preparedInput = [];
    inputArr.forEach(function(input){
        (input!=='')?preparedInput.push(parseFloat(input)):null;
    });
    return preparedInput;
}
function calcMax(arr){
    return Math.max.apply(null,arr);
}
function calcMin(arr){
    return Math.min.apply(null,arr);
}
function calcSum(arr){
    return arr.reduce(function(reducer,elem){
        return reducer+=elem;
    })
}
function calcAvg(arr){
    var sum = calcSum(arr);
    return sum/arr.length;
}
function reverseFunc(arr){
    return arr.reverse().join(",");
}
function initiateCalculator(e){
    var numArr = inputParser(e.target.value);
    if(numArr.length){
        maxOutput.textContent =  calcMax(numArr);
        minOutput.textContent = calcMin(numArr);
        sumOutput.textContent = calcSum(numArr);
        avgOutput.textContent = calcAvg(numArr);
        reverseOutput.textContent = reverseFunc(numArr);
    }else{
        resetOutput();
    }
}
calcInput.addEventListener('input',initiateCalculator);