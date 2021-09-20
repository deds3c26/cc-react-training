//5.Destructure the following object to extract firstname and the 'second' likes item

const user = { person: { employee: { firstname: "Rahul" }, likes: ["Cycling", "Hiking", "Driving"] } }
console.log(user.person.employee.firstname);
console.log(user.person.likes[1]);
