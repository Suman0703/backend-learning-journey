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

let arr = ["x", "y", "z"];

for (let index in arr) {
    console.log(index, arr[index]);
}

//2nd
let user = {
    name: "Suman",
    age: 20
};

for (let key in user) {
    console.log(key, user[key]);
}


