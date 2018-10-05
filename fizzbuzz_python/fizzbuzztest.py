import unittest
from fizzbuzz import *

class Fizzbuzz(unittest.TestCase):

    def test_is_divisible_by_three_and_five(self):
        self.assertEquals(FizzBuzz(15), "FizzBuzz");

    def test_is_divisible_by_three(self):
        self.assertEquals(FizzBuzz(3), "Fizz");

    def test_is_divisible_by_five(self):
        self.assertEquals(FizzBuzz(5), "Buzz");



# def main():
#     unittest.main()

if __name__ == "__main__":
    unittest.main()
