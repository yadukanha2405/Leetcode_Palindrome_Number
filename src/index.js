var isPalindrome = function (x) {
  if (x < 0) return false;
  let stringX = x + "";
  let inputLen = stringX.length;
  let mid;
  if (inputLen == 1) return true;
  if (inputLen % 2 == 0) {
    mid = inputLen / 2;
    if (stringX[mid - 1] !== stringX[mid]) {
      return false;
    }
  } else {
    mid = Math.ceil(inputLen / 2);
  }
  return helper(stringX, mid);
};

function helper(s, m) {
  for (let i = 0; i < m - 1; i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome(11));
