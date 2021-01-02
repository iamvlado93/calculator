const inputData = document.querySelector('.formula'),
      resultData = document.querySelectorAll('.result');

function input(i) {
    inputData.value = inputData.value + i
}

function result() {
    resultData.value = eval(inputData.value);
    inputData.value = eval(inputData.value);
}