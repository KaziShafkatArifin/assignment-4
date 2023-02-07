// Problem 1: Let’s play a mind game.

// description : Declare function called mindGame().Take a input that will be positive number Witch has to  multiplied by 3 then addition by 10 then divided by 2 then subtracted by 5.Then that value has to return.

function mindGame(number){
    const multiply = number * 3;
    const add = multiply + 10;
    const division = add / 2;
    const subtract = division - 5;
    if (typeof myNumber !== 'number'){
        const error = 'Please,enter a valid number!';
        return error
    }
    else{
        return subtract
    }
}

const myNumber = 33;
const mindGameResult = mindGame(myNumber);
console.log(mindGameResult);


// Problem 2: Finding even or odd.

// description : Declare a function called evenOdd().It will take a string as parameter then return 'odd' or 'even' according to length of that string. 


function evenOdd(string){
    for (i = 0; i < string.length; i++){
        let index = i;
        let element = string[index];       
    }
    if(typeof myString !== 'string'){
        const error = 'Please,enter a valid word!';
        return error;
    }
   else if(string.length % 2 == 0){
        const resutEven = 'even';
        return resutEven;
    }
    else{
        const resutOdd = 'odd';
        return resutOdd;
    }
}

const myString = 'batch7';
const getEvenOdd = evenOdd(myString);
console.log(getEvenOdd)



//Problem 3: Is Less or Greater than seven.

// description : Declare a function called isLGSeven().The it has to be found the difference between the input value and 7. If this difference is smaller than 7,the subtraction will return . Otherwise double of the input will return .


function isLGSeven(num){
    const number = num - 7;
    if (typeof myNum == 'number' || typeof myNum == 'string'){
        if (number < 7){
        return number
    }
        else{
        const doubleNumber = num * 2;
        return doubleNumber
    }
    }
    else {
        const error = 'Please,enter a valid number!'
        return error
    }
}

const myNum = 6;
const getResult = isLGSeven(myNum);
console.log(getResult);


//Problem 4: Finding Bad data.

// description : Declare a function called findingBadData().It will take an array as input. Numbers can be negative and positive . If any number is negative that will be called "Bad Data". If a number is positive, that will be called "Good Data".Then output is 0 if there is no negative number or output is any positive number according to availble negative number in that array.


function findingBadData(arr){
    let badData = [];   
    for (i = 0; i < arr.length; i++){
        let index = i;
        let element = arr[index];
        if (element <= -1){
            badData.push(element)
        }
    }
    if (typeof myArr !== 'object'){
        const error = 'Please,enter a valid array!';
        return error
    }
    else{
        let badDataLength = badData.length;
        return badDataLength;
    }   
}

const myArr = [-1, 1, -2, 2, -3, 3];
const getBadData = findingBadData(myArr);
console.log(getBadData)


//Problem 5: Convert gems into diamond.

// description : here we got a function called gemsToDiamond().It will take three numbers (the number of gems of your 3 friends) as input.Thing has to be figure out how many diamonds will be got in total by combining the gems of all friends. If the number of total diamond is over 1000, then it will be got as many diamonds as are left by subtracting 2000 from the total diamond.


function gemsToDiamond(gemsNum1, gemsNum2, gemsNum3){
    const gemsPower1 = 21;
    const gemsPower2 = 32;
    const gemsPower3 = 43;

    const getDiamonds1 = gemsPower1 * gemsNum1;
    const getDiamonds2 = gemsPower2 * gemsNum2;
    const getDiamonds3 = gemsPower3 * gemsNum3;
    
    const totalGems = getDiamonds1 + getDiamonds2 + getDiamonds3;
    if (typeof friendGems1 !== 'number' || typeof friendGems2 !== 'number' || typeof friendGems3 !== 'number'){
        const error = "Please,enter a valid number!";
        return error
    }
    else if (totalGems > 2000){
        const restGems = totalGems - 2000;
        return restGems
    }
    else{
        return totalGems
    }
}

const friendGems1 = 100;
const friendGems2 = 5;
const friendGems3 = 1;

const getDiamond = gemsToDiamond(friendGems1, friendGems2, friendGems3);
console.log(getDiamond)
