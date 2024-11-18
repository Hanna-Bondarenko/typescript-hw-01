const age: number = 50;
const username: string = "Max";
const toggle: boolean = true;
const empty: null = null;
const callback: (a: number) => number = (a) => {
  return 100 + a;
};

console.log(`Username: ${username}, Age: ${age}, Toggle: ${toggle}`);
console.log(`Callback result: ${callback(10)}`);
