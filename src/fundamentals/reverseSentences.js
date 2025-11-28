function reverseWords(sentence) {
  if (typeof sentence !== "string") {
    return null;
  }
  //Trim to remove extra space at start/end
  const words = sentence.trim().split(/\s+/); // split on one more spaces
  let left = 0;
  let right = words.length - 1;
  while (left < right) {
    //desctructring of words
    [words[left], words[right]] = [words[right], words[left]];
    left++;
    right--;
  }
  return words.join(" ");
}
//const words = sentsence.trim().split(/\s+/);
console.log(reverseWords("  Hello kpie Hey  "));
