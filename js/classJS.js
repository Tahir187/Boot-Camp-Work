class Vehicle{

    constructor(name, maker, engine){
      this.name = name;
      this.maker = maker;
      this.engine = engine;
    }
  
    getDetails(){
      return(`the name of the vehicle is "${this.name}" maker of vechile is "${this.maker}" and the engine is "${this.engine}".`)
    }
  
  }
  
  let bike1 = new Vehicle("Hayabusa", "Suzuki", "1340cc");
  let bike2 = new Vehicle("Ninja", "Kawasaki", "998cc");
  console.log(bike1.name);
  console.log(bike1.getDetails());
  
  let car1 = new Vehicle("Mustang", "Ford", "20000cc");
  console.log(car1.getDetails())