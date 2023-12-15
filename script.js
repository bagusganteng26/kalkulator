function addToInput(num) {

    var input = document.querySelector('.calculator .screen');

    input.value = input.value + num;

  }

 

  function calculate() {

    var input = document.querySelector('.calculator .screen');

    var result = eval(input.value); // Evaluate the input string as an expression

    result = parseInt(result); // Convert the result to an integer

    input.value = result;

  }

 

  function clearInput() {

    var input = document.querySelector('.calculator .screen');

    input.value = '0';

  }

 

  function deleteLastChar() {

    var input = document.querySelector('.calculator .screen');

    input.value = input.value.slice(0, -1);

  }