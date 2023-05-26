const obj = {
    data: function(owner, country){
        return this.model + " " + this.make + " " + this.year + ", " + owner + ", " + country;
    }
}

const carData1 ={
    model : "Mustang",
    make : "Ford",
    year : 1992,
}

const carData2 = {
    model : "Indus",
    make : "Toyata",
    year : 1987,
}

console.log(obj.data.apply(carData2, ["Tahir", "Pakistan"]));