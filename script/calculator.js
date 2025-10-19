// Calculator
const calcDisplay = document.getElementById('calc-display');
const allClear = document.getElementById('allClear');
const percent = document.getElementById('percent');
const backspace = document.getElementById('backspace');
const divide = document.getElementById('divide');
const multiply = document.getElementById('multiply');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const point = document.getElementById('point');
const equal = document.getElementById('equal');
const numberButtons = document.querySelectorAll(".num");
const onOffbtn = document.getElementById('onOff')
let displayedValue = calcDisplay.value;


//numbers
numberButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        if (!isOn) return;
        displayedValue += btn.textContent;
        calcDisplay.value = displayedValue;
        calcDisplay.scrollLeft = calcDisplay.scrollWidth;
    });
});
//clear all
allClear.addEventListener('click', () => {
    if (!isOn) return;
    calcDisplay.value = '';
    displayedValue = '';
})
//operators

backspace.addEventListener('click', () => {
    if (!isOn) return;
    displayedValue = displayedValue.slice(0, -1);
    calcDisplay.value = displayedValue;
})

divide.addEventListener('click', () => {
    if (!isOn) return;
    displayedValue += '/';
    calcDisplay.value = displayedValue;
    calcDisplay.scrollLeft = calcDisplay.scrollWidth;
})

multiply.addEventListener('click', () => {
    if (!isOn) return;
    displayedValue += '*';
    calcDisplay.value = displayedValue;
    calcDisplay.scrollLeft = calcDisplay.scrollWidth;
})

minus.addEventListener('click', () => {
    if (!isOn) return;
    displayedValue += '-';
    calcDisplay.value = displayedValue;
    calcDisplay.scrollLeft = calcDisplay.scrollWidth;
})

plus.addEventListener('click', () => {
    if (!isOn) return;
    displayedValue += '+';
    calcDisplay.value = displayedValue;
    calcDisplay.scrollLeft = calcDisplay.scrollWidth;
})

point.addEventListener('click', () => {
    if (!isOn) return;
    displayedValue += '.';
    calcDisplay.value = displayedValue;
    calcDisplay.scrollLeft = calcDisplay.scrollWidth;
})

//calculate
equal.addEventListener('click', () => {
    if (!isOn) return;
    try {
        displayedValue = eval(displayedValue);
        calcDisplay.value = displayedValue;
    } catch {
        calcDisplay.value = 'Err';
        displayedValue = '';
    }

})

//keyboard functionality

document.addEventListener('keydown', (e) => {
    const key = e.key;
    if (!isOn) return;

    if (!isNaN(key)) {
        displayedValue += key;
        calcDisplay.value = displayedValue;
        calcDisplay.scrollLeft = calcDisplay.scrollWidth;
    }
    else if (['+', '-', '*', '/'].includes(key)) {
        displayedValue += key;
        calcDisplay.value = displayedValue;
        calcDisplay.scrollLeft = calcDisplay.scrollWidth;
    }
    else if (key === '.') {
        displayedValue += key;
        calcDisplay.value = displayedValue;
        calcDisplay.scrollLeft = calcDisplay.scrollWidth;
    }
    else if (key === 'Backspace') {
        displayedValue = displayedValue.slice(0, -1);
        calcDisplay.value = displayedValue;
        calcDisplay.scrollLeft = calcDisplay.scrollWidth;
    }
    else if (key === 'Delete') {
        displayedValue = '';
        calcDisplay.value = '';
    }

    else if (key === 'Enter' || key === '=') {
        try {
            displayedValue = eval(displayedValue);
            calcDisplay.value = displayedValue;
        } catch {
            calcDisplay.value = 'Err';
            displayedValue = ''
        }
    }
})

//on off btn
let isOn = false;
onOffbtn.addEventListener('click', () => {
    isOn = !isOn;
    onOffbtn.blur();
    if (isOn) {
        calcDisplay.value = '0';
        calcDisplay.style.backgroundColor = 'lightblue';
        calcDisplay.style.color = 'black';
    } else {
        calcDisplay.value = '';
        calcDisplay.style.backgroundColor = 'black';
    }
})

allClear.addEventListener('click', () => {
    allClear.blur();
})


// Counter

const counterDisplay = document.getElementById('counterDisplay');
const addOneBtn = document.getElementById('addOne');
const substractOneBtn = document.getElementById('substractOne');
const resetCountBtn = document.getElementById('resetCount');
const chooseIncrement = document.getElementById('chooseIncrement')
let count = 0;
let halfIncrement = false;
let doubleIncrement = false;

chooseIncrement.addEventListener('change', () => {
    const value = chooseIncrement.value;
    console.log('changed')
    if (value === "0.5") {
        halfIncrement = true;
        doubleIncrement = false;
    } else if (value === "1") {
        halfIncrement = false;
        doubleIncrement = false;
    } else if (value === "2") {
        doubleIncrement = true;
        halfIncrement = false;
    }

})


addOneBtn.addEventListener('click', () => {
    if (halfIncrement) {
        count += 0.5;
    } else if (doubleIncrement) {
        count += 2;
    } else {
        count++;
    }

    counterDisplay.value = count;
});

substractOneBtn.addEventListener('click', () => {
    if (halfIncrement) {
        count -= 0.5;
    } else if (doubleIncrement) {
        count -= 2;
    } else {
        count--;
    }

    counterDisplay.value = count;
});

resetCountBtn.addEventListener('click', () => {
    count = 0;
    counterDisplay.value = count;
});

