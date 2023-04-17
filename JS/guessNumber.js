
let n = 0
let guessTry = 0;
let rendomNumber = Math.floor(Math.random() * 100);

while (n < 1) {
  
  let inputNumber = prompt("Enter the Number betwen 1 to 100", n);

  console.log(inputNumber);

  if (rendomNumber > inputNumber) {
    console.log("Number is Smaller")
    guessTry = guessTry + 1
  }
  else if (rendomNumber < inputNumber) {
    console.log("Number is Bigger")
    guessTry = guessTry + 1
  }

  else if (rendomNumber == inputNumber) {
    console.log("Number is Corect you take", guessTry, "try to provide the correct answer")
    n = n+2
  }
  else {
    console.log("enter a valid nuber between 1 to 100")
  }

}