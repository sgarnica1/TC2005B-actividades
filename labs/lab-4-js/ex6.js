const arrayElement = document.getElementById("array");
const maxElement = document.getElementById("max")
const minElement = document.getElementById("min")

// Random array
const array = Array.from(
  { length: 10 },
  () => Math.floor(Math.random() * 1000) + 1
);

// Show array in HTML
arrayElement.innerHTML = `[${array}]`;

// Show solution in HTML
maxElement.innerHTML = getMax(array)
minElement.innerHTML = getMin(array)

// Util funcitions
function getMax(arr) {
  let max = arr[0];
  arr.forEach((val) => {
    max = val > max ? val : max;
  });

  return max;
}

function getMin(arr) {
  let min = arr[0];
  arr.forEach((val) => {
    min = val < min ? val : min;
  });

  return min;
}
