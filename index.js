let addOnEl = document.querySelector("#timer");
let timeCount = document.querySelector('.timing-count');
let count = 0;
let numCount = 0;


function sumOne() {
    numCount += 1;
    addOnEl.textContent = numCount;
    console.log('You clicked me');
}

sumOne()

function sumTwo() {
    numCount += 2;
    addOnEl.textContent = numCount;
    console.log('You clicked me');
}

sumTwo()

function sumThree() {
    numCount += 3;
    addOnEl.textContent = numCount;
    console.log('You clicked me');
}

sumThree()

//Guest part

function addOne() {
    count += 1;
    timeCount.textContent = count;
    console.log('You clicked me');
}

addOne()

function addTwo() {
    count += 2;
    timeCount.textContent = count;
    console.log('You clicked me');
}

addTwo()

function addThree() {
    count += 3;
    timeCount.textContent = count;
    console.log('You clicked me');
}

addThree()

