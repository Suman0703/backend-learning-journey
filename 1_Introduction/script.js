var array = [1, 2, 3, 4, 5, 6, 7, 8];

//foreach : forEach() is an array method used to loop through each element of an array and perform some action.
array.forEach(function (val) {
    console.log(val + " " + "Hello");
})

//forof: It gives you values of iterable things.
let arr = [10, 20, 30];

for (let value of arr) {
    console.log(value);
}

//forin: It gives us keys (indexes or property names)

let arry = ["x", "y", "z"];

for (let index in arry) {
    console.log(index, arry[index]);
}

//2nd
let user = {
    name: "Suman",
    age: 20
};

for (let key in user) {
    console.log(key, user[key]);
}

// map function: Create a new array by transforming every element of an existing array
let newArray = array.map(function (val) {
    return val * 6;
})

console.log(newArray);

//filter: It returns a new array containing only the elements that pass the test
let result = array.filter(function (val) {
    if (val > 3) {
        return true;
    }
    else
        return false;
})

console.log(result);

//find: Get the FIRST element that matches a condition. It gives only one value
let ouput = array.find(function (val) {
    if (val > 3) {
        return true;
    }
    else
        return false;
})

console.log(ouput);

//indexOf: Find the position (index) of a value in an array (or string)
let index = array.indexOf(30);//-1 if value does not exist
console.log(index);


//Object
let obj = {
    name: "Suman",
    class: "B.tech CSE",
    rollNo: 2305609
}

// Object.freeze(obj); if we want value should not be changed
obj.name = "Raman"
console.log(obj.name);

// Async JS coding: Doing tasks without blocking the rest of the code
async function getUsers() {
    try {
        let response = await fetch("https://randomuser.me/api/");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getUsers();


//Destructuring: Taking values out of an object or array and storing them into variables in a shortcut way

let user = {
    name: "Suman",
    age: 20,
    city: "Delhi"
};

let { name, age } = user;

console.log(name); // Suman
console.log(age);  // 20