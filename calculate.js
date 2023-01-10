function calculate() {
  let firstNumber = parseInt(document.getElementById('inp1').value);
  let secondNumber = parseInt(document.getElementById('inp2').value);

  let product = 0;
  for (let i = secondNumber; i > 0; i--) {
    product += firstNumber;
  }

  document.getElementById("answer").innerHTML = product;
}

/*
--PYTHON EQUIVALENT--

func calculate():
  firstNumber = inp1
  secondNumber = inp2

  product = 0
  i = secondNumber
  while i > 0:
    product += firstNumber
    i -= 1

  print(product)
*/