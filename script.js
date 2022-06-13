const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
  calculatorScreen.value = number;
};

const numbers = document.querySelectorAll(".number");
//console.log(numbers)

numbers.forEach((number) => {
  //   console.log(number);
  number.addEventListener("click", (event) => {
    updateScreen(event.target.value);
  });
});
