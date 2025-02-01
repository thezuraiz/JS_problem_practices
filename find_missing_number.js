const array = [2, 4, 6, 7];
function findMissingNumber(arr) {
  arr.sort((a, b) => a - b);
  let minimumNumber = arr[0];
  let emptyArray = [];
  arr.forEach((element) => {
    while (minimumNumber < element) {
      emptyArray.push(minimumNumber);
      minimumNumber++;
    }
    minimumNumber++;
  });

  return emptyArray;
}

const missingNumber = findMissingNumber(array);
console.log("Missing Number is " + missingNumber);
