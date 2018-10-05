# class Fizzbuzz:
def FizzBuzz(number):
    if number % 15 == 0:
      return ("FizzBuzz")

    elif number % 3 == 0:
      return ("Fizz")

    elif number % 5 == 0:
      return ("Buzz")

    else:
        return number

for num in range(101):
    print FizzBuzz(num)
