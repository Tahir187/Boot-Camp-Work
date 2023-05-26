const person1 ={
    fname : "Muhammad",
    lname : "Tahir",
    age : 23,       
}
const person2 ={
    fname : "Tahir",
    lname : "Bharchoond",
    age : 22
}
const obj1 = {
    fullName: function(city, province){
        return this.fname + " " + this.lname + " " + this.age + ", " + city + ", " + province;
    }
}

console.log(obj1.fullName.call(person1, "Shikarpur", "Sindh"))