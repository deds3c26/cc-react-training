//3.Given the following list of items
//Write a function which returns an array that contains all number more than or equal to 150

let values = [1, 33, 99, 50, 100, 150, 60, 99, 1000, 999, 0, -1, 10];
function greater(values) {
    return values.filter(values => values >= 150)
}
console.log(greater(values));
