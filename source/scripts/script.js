const display = document.querySelector('.formula');
const calculation = document.querySelector('.result');


function input(i) {
    display.value = display.value + i
  }

function result() {
    if (eval(display.value) == undefined) {
        calculation.value = '0';
        display.value = '0';
    } if (eval(display.value) == Infinity) {
        calculation.value = '0';
        display.value = 'Not Allowed';
    }
    calculation.value = eval(display.value);
    display.value = eval(display.value);
}

function reset() {
    calculation.value = '';
    display.value = '';
}

function percentage() {
    calculation.value = calculation.value / 100;
}

