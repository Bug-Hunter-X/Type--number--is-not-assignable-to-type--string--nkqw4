function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result: number = add(5, 3); // result is 8
result = subtract(10, 5); // result is 5

//or

let resultString: string = add(5,3).toString();
let resultString2: string = subtract(10,5).toString();