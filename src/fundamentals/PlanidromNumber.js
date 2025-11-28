function isPalindromeNumber(num) {
  if (typeof num !== "number" || !Number.isInteger(num)) {
    return false;
  }
  if (num < 0) {
    return false;
  }
  const str = String(num);
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(isPalindromeNumber(121));
