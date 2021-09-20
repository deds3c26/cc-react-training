//1. Find unique items in the array
function unique(arr) {
  var unique = values.filter((x, i, a) => a.indexOf(x) == i)
  return unique;
}
let values = ["green", "green", "red", "red", "yellow", "pink", "pink", "yellow"];
let arr = values;

console.log("unique values are", unique(arr));
