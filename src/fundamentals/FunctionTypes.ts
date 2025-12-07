interface StringModifier {
  modify: (input: string) => string;
  //index signature: allow aditional string properties with strin value
  [key: string]: any;
}
const stringOps: StringModifier = {
  modify(input: string): string {
    return input.toUpperCase();
  },
  description: "Conversts strings to uppercases",
  version: 1.0,
};
//using the function type property
console.log(stringOps.modify("Hello World"));
console.log(stringOps.description);
console.log(stringOps["version"]);
//demonstarating adding new property dynamically
stringOps["author"] = "Kpie";
console.log(stringOps.author);
//another example function type as standoalone type alises
type BinaryOpartin = (a: number, b: number) => number;
const add1: BinaryOpartin = (x, y) => x + y;
const multiply: BinaryOpartin = (x, y) => x * y;

console.log(add1(5, 6));
console.log(multiply(2, 3));
