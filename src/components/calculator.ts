export function sum(a: number, b: number) {
  return a + b;
}

export function multiply(a: number, b: number) {
  return a * b;
}

export class Calculator {
  private value: number;

  constructor(initialValue: number) {
    this.value = initialValue;
  }

  add(num: number) {
    this.value += num;
  }

  subtract(num: number) {
    this.value -= num;
  }

  multiply(num: number) {
    this.value *= num;
  }

  divide(num: number) {
    this.value /= num;
  }

  getValue() {
    return this.value;
  }
}
