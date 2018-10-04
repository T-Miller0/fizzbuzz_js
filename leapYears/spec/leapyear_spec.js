describe("Leapyear", function() {

  var leapYear;

  beforeEach(function() {
    leapYear = new Leapyear();
  });

  describe("knows when a number is", function() {
    it('Not divisible by 4', function() {
      expect(leapYear.isNotDivisibleByFour(1999)).toBe(true);
    })
    it('is divisible by 100 but not by 400', function() {
      expect(!leapYear.DivisibleByOneHundredNotFourHundred(1700)).toBe(false);
    })
    it('is divisible by 4 but not by 100', function() {
    expect(leapYear.DivisibleByfourNotOneHundred(2004)).toBe(true);
    })
    it('is divisible by 400', function() {
      expect(leapYear.DivisiblebyFourHundred(2000)).toBe(true);
    });
  });
});
