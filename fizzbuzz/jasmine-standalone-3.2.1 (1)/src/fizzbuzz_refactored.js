function fizzbuzz(num) {
switch (num) {
  case (num % 3 == 0):
  console.log("fizz")
  break;
  case (num % 5 == 0):
  console.log("buzz)"
  break;
  case (num % 3 == 0 && num % 5 == 0)
  console.log("fizzbuzz")
  }
}
fizzbuzz(100)
