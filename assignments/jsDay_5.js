// Simple object decleration

// first type decleration
const obj1 = {

    fName : "Tahir",
    lName : "Bharchoond",
    id : 17,
}

// Second type decleration
const obj2 ={

    1 : "Tariq",
    2 : "Chang",
    3 : 31,
}

// Thrid type decleration
const obj3 ={

    "fname" : "Asad",
    "lname" : "Pathan",
    "id" : 03,
}

// object as value

const myHonda ={
    color : "Red",
    wheels : 4,
    engine : {cylinders: 4, size: 2},
}

console.log(myHonda.engine)

const myCar = {
    make: "Ford",
    model: "Mustang",
    year: 1969,
  };
console.log(myCar.model);

// properties of objects

const myObj = {};
const str =  "myString";
const rand = Math.random();
const anotherObj = {};


// Additional properties on myObj
myObj.type = "Dot Syntax for a key named type";
console.log(myObj)

console.log(Object.getOwnPropertyNames(myCar))