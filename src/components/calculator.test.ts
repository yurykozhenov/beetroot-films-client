import { sum, multiply, Calculator } from "./calculator";

describe("sum", () => {
  test("should add 1 and 2 and return 3", () => {
    const result = sum(1, 2);
    expect(result).toEqual(3);
  });

  test("should add 2 and 2 numbers and return 4", () => {
    const result = sum(2, 2);
    expect(result).toEqual(4);
  });

  test("should add -1 and 2 numbers and return 1", () => {
    const result = sum(-1, 2);
    expect(result).toEqual(1);
  });
});

describe("multiply", () => {
  test("should multiply 1 and 2 and return 2", () => {
    const result = multiply(1, 2);
    expect(result).toEqual(2);
  });

  test("should multiply 2 and 2 numbers and return 4", () => {
    const result = multiply(2, 2);
    expect(result).toEqual(4);
  });

  test("should multiply -1 and 2 numbers and return -2", () => {
    const result = multiply(-1, 2);
    expect(result).toEqual(-2);
  });
});

describe("Calculator", () => {
  test("should print value 1 when initialized with 1", () => {
    const calculator = new Calculator(1);
    expect(calculator.getValue()).toEqual(1);
  });

  test("should print value -10 when initialized with -10", () => {
    const calculator = new Calculator(-10);
    expect(calculator.getValue()).toEqual(-10);
  });

  describe("add", () => {
    let calculator: Calculator;

    beforeEach(() => {
      calculator = new Calculator(0);
    });

    test("should add 2", () => {
      calculator.add(2);
      expect(calculator.getValue()).toEqual(2);
    });

    test("should add 0", () => {
      calculator.add(0);
      expect(calculator.getValue()).toEqual(0);
    });

    test("should add -20", () => {
      calculator.add(-20);
      expect(calculator.getValue()).toEqual(-20);
    });
  });

  describe("divide", () => {
    test("should divide by 0 and result to NaN", () => {
      const calculator = new Calculator(0);
      calculator.divide(0);
      expect(calculator.getValue()).toEqual(NaN);
    });

    test("should divide 8 by 2 and result to 4", () => {
      const calculator = new Calculator(8);
      calculator.divide(2);
      expect(calculator.getValue()).toEqual(4);
    });

    test("should divide by 9 by 2 and result to 4.5", () => {
      const calculator = new Calculator(9);
      calculator.divide(2);
      expect(calculator.getValue()).toEqual(4.5);
    });

    test("should divide by 10 by 3 and result to 3.33333...", () => {
      const calculator = new Calculator(10);
      calculator.divide(3);
      expect(calculator.getValue().toFixed(5)).toEqual("3.33333");
    });
  });
});
