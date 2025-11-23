function CalculatePrice(price: number, discount?: number): number {
  return price - (discount || 0);
}
const priceAfterDiscount = CalculatePrice(500, 5);

console.log(priceAfterDiscount);

function calculateScore(
  initialScore: number,
  penaltyPoints: number = 2
): number {
  return initialScore - penaltyPoints;
}

const scoreAfterPenaltiy = calculateScore(100, 20);
const scoreWithPenalty = calculateScore(300);
console.log(scoreAfterPenaltiy);
console.log(scoreWithPenalty);

function sum(message: string, ...numbers: number[]): string {
  const doubled = numbers.map((num) => num * 2);
  console.log(doubled);
  const total = numbers.reduce((previous, current) => {
    return previous + current;
  }, 0);
  return `${message}${total}`;
}

let result1 = sum("The total is:", 1, 2, 3, 4, 5);
console.log(result1);

function calculateBoth(input: string | number) {
  if (typeof input === "number") {
    console.log(input * 2);
  } else {
    console.log(input.toLowerCase());
  }
}
calculateBoth(10);
calculateBoth("Kpie");
