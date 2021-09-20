//4.Given the following array of objects called 'users', write a function which creates a new array that contains objects in the following structure
let raksha = { name: "Raksha", surname: "Sharma", age: 28 };
let srinivas = { name: "Srinivas", surname: "Iyengar", age: 30 };
let usha = { name: "Usha", surname: "Janardhana", age: 54 };

let users = [raksha, srinivas, usha];


function mapped() {
    let mappedUsers = users.map((value, index) => { return { fullName: value.name + value.surname, id: index + 1 } })
    return console.log('usersMapped =', mappedUsers);
}
console.log(mapped());
