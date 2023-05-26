const person = {
    fname : "Muhammad",
    lname : "Tahir",
    fullName: function(){
        return this.fname + " " + this.lname;
    }
}

const member = {
    fname : "Tahir",
    lname : "Bharchoond",
}

let name = person.fullName.bind(member);
console.log(name)