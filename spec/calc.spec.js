describe("Calculator", function() {

  var calc;
  beforeEach(function() {
    calc = new Calculator();
  });

  describe("Input method", function() {

    describe("Addition", function() {

      it("can add positive integers", function() {
        expect(calc.input(4,"+",5)).toEqual(9);
      });

      it("can add negative integers", function() {
        expect(calc.input(-1,"+",-3)).toEqual(-4);
      });

      it("can add positive decimals", function() {
        expect(calc.input(1.25,"+",3.4)).toEqual(4.65);
      });
    });

    describe("Subtraction", function() {

      it("can subtract positive integers", function() {
        expect(calc.input(5,"-",4)).toEqual(1);
      });

      it("can subtract negative integers", function() {
        expect(calc.input(-1,"-",-3)).toEqual(2);
      });

      it("can subtract positive decimals", function() {
        expect(calc.input(1.25,"-",3.4)).toEqual(-2.15);
      });
    });

    describe("Multiplication", function() {

      it("can multiply positive integers", function() {
        expect(calc.input(5,"*",4)).toEqual(20);
      });

      it("can multiply negative integers", function() {
        expect(calc.input(-1,"*",-3)).toEqual(3);
      });

      it("can multiply positive decimals", function() {
        expect(calc.input(4.5,"*",2.5)).toEqual(11.25);
      });
    });

    describe("Division", function() {

      it("can divide positive integers", function() {
        expect(calc.input(5,"/",2)).toEqual(2.5);
      });

      it("can divide negative integers", function() {
        expect(calc.input(-1,"/",-3)).toEqual(0.3333333333333333);
      });

      it("can divide positive decimals", function() {
        expect(calc.input(4.5,"/",2.5)).toEqual(1.8);
      });
    });

    describe("Bad User Input", function(){

      it("reports NaN when the first number given is a non number type", function() {
        expect(calc.input("foo","+",7)).toBeNaN();
      });

       it("reports NaN when the second number given is a non number type", function() {
        expect(calc.input(7,"+","foo")).toBeNaN();
      });

      it("reports 'unrecognized operation!' when given improper operation", function() {
        expect(calc.input(5,"bar",7)).toEqual("unrecognized operation!");
      });
    });

  });
});
