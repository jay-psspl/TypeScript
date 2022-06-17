interface IPerson { 
    firstName:string, 
    lastName:string, 
 } 
 
 var customer:IPerson = { 
    firstName:"Jay",
    lastName:"Patel", 
 } 

 console.log(customer.firstName) 
 console.log(customer.lastName) 
 
 var employee:IPerson = { 
    firstName:"Yash",
    lastName:"Patel", 
 } 
 console.log(employee.firstName);
 console.log(employee.lastName);


 //Simple Interface Inheritance

 interface Person { 
    age:number 
 } 
 
 interface Musician extends Person { 
    instrument:string 
 } 
 
 var drummer = <Musician>{}; 
 drummer.age = 27 
 
 drummer.instrument = "Drums" 
 console.log("Age:  "+drummer.age) 
 console.log("Instrument:  "+drummer.instrument)

//

interface Rectangle {
    height: number,
    width: number
  };
  
  const rectangle: Rectangle = {
    height: 20,
    width: 10
  };
  
  console.log(rectangle);