const btnClearEntry = document.getElementById("btn-clear-entry");
const btnClearAll = document.getElementById("btn-clear-all");
const btnBack = document.getElementById("btn-back");
const btnDivide = document.getElementById("btn-divide");
const btn7 = document.getElementById("btn-7");
const btn8 = document.getElementById("btn-8");
const btn9 = document.getElementById("btn-9");
const btnMultiply = document.getElementById("btn-multiply");
const btn4 = document.getElementById("btn-4");
const btn5 = document.getElementById("btn-5");
const btn6 = document.getElementById("btn-6");
const btnSubtract = document.getElementById("btn-subtract");
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const addBtn = document.getElementById("btn-add");
const btnAddSubtract = document.getElementById("btn-add-subtract");
const btn0 = document.getElementById("btn-0");
const btnComma = document.getElementById("btn-comma");
const btnEqual = document.getElementById("btn-equal");

function testBtn(calculationType) {
  if (calculationType == "btn-clear-entry") {
    alert("CE - button test");
  } else if (calculationType == "btn-clear-all") {
    alert("C - button test");
  } else if (calculationType == "btn-back") {
    alert("BACK - button test");
  } else if (calculationType == "btn-divide") {
    alert("DIVIDE - button test");
  } else if (calculationType == "btn-7") {
    alert("7 - button test");
  } else if (calculationType == "btn-8") {
    alert("8 - button test");
  } else if (calculationType == "btn-9") {
    alert("9 - button test");
  } else if (calculationType == "btn-multiply") {
    alert("MULTIPLY - button test");
  } else if (calculationType == "btn-4") {
    alert("4 - button test");
  } else if (calculationType == "btn-5") {
    alert("5 - button test");
  } else if (calculationType == "btn-6") {
    alert("6 - button test");
  } else if (calculationType == "btn-subtract") {
    alert("SUBTRACT - button test");
  } else if (calculationType == "btn-1") {
    alert("1 - button test");
  } else if (calculationType == "btn-2") {
    alert("2 - button test");
  } else if (calculationType == "btn-3") {
    alert("3 - button test");
  } else if (calculationType == "btn-add") {
    alert("ADD - button test");
  } else if (calculationType == "btn-add-subtract") {
    alert("(+/-) - button test");
  } else if (calculationType == "btn-0") {
    alert("0 - button test");
  } else if (calculationType == "btn-comma") {
    alert("COMMA - button test");
  } else if (calculationType == "btn-equal") {
    alert("EQUAL - button test");
  }
}



function test(element, event) {
  console.log(element, event);

}

// TODO - turn into LOOP

btnClearEntry.addEventListener("click", function (event) {test(this, event)} );
// btnClearAll.addEventListener("click", function () {testBtn('')} );
// btnBack.addEventListener("click", function () {testBtn('')} );
// btnDivide.addEventListener('click', function () {testBtn('')} );
// btn7.addEventListener('click', function () {testBtn('')} );
// btn8.addEventListener('click', function () {testBtn('')} );
// btn9.addEventListener('click', function () {testBtn('')} );
// btnMultiply.addEventListener('click', function () {testBtn('')} );
// btn4.addEventListener('click', function () {testBtn('')} );
// btn5.addEventListener('click', function () {testBtn('')} );
// btn6.addEventListener('click', function () {testBtn('')} );
// btnSubtract.addEventListener('click', function () {testBtn('')} );
// btn1.addEventListener('click', function () {testBtn('')} );
// btn2.addEventListener('click', function () {testBtn('')} );
// btn3.addEventListener('click', function () {testBtn('')} );
// addBtn.addEventListener('click', function () {testBtn('')} );
// btnAddSubtract.addEventListener('click', function () {testBtn('')} );
// btn0.addEventListener('click', function () {testBtn('')} );
// btnComma.addEventListener('click', function () {testBtn('')} );
// btnEqual.addEventListener('click', function () {testBtn('')} );




