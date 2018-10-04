var Leapyear = function() {};

Leapyear.prototype._isDivisibleBy = function(number, divisor) {
  return (number % divisor == 0);
};

Leapyear.prototype._isNotDivisibleBy = function(number, divisor) {
  return (number % divisor !== 0);
};
debugger;
Leapyear.prototype.isNotDivisibleByFour = function(number) {
  return this._isNotDivisibleBy(number, 4);
};

Leapyear.prototype.DivisibleByOneHundredNotFourHundred = function(number) {
  return this._isDivisibleBy(number, 100) && this._isNotDivisibleBy(number, 400);
};

Leapyear.prototype.DivisibleByfourNotOneHundred = function(number) {
  return this._isDivisibleBy(number, 4) && this._isNotDivisibleBy(number, 100);
};

Leapyear.prototype.DivisiblebyFourHundred = function(number) {
  return this._isDivisibleBy(number, 400)
};
