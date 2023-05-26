// // Constructor function
function perosn1(first_name, last_name){
    this.first_name = first_name;
    this.last_name = last_name;
  } 
  
  let person2 = new perosn1('Muhammad',('Tahir'));
  let person3 = new perosn1('Tahir', 'Bharchoond');
  
  console.log(person2.first_name);
  console.log(`${person3.first_name} ${person3.last_name}`)