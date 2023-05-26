class Person{
    constructor(name, id){
      this.name = name;
      this.id = id;
    }
    add_Address(add){
      this.add = add;
    }
  
    getDetails(){
      console.log(`Name is ${this.name} Id is ${this.id}
      address is ${this.add}.`)
    }
  }
  let person1 = new Person("Muhammad Tahir", 17);
  person1.add_Address("Karachi");
  
  person1.getDetails();