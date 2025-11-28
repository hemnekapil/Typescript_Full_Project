function reverseString(str) {
  if (typeof str !== "string") {
    return null;
  }
  const chars = str.split("");
  let left = 0;
  let right = chars.length - 1;
  while (left < right) {
    //swap the char
    [chars[left], chars[right]] = [chars[right], chars[left]];
    left++;
    right--;
  }
  return chars.join("");
}

console.log(reverseString("Hello"));
