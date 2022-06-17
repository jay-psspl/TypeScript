// public - (default) allows access to the class member from anywhere
// private - only allows access to the class member from within the class
// protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below

class Person {
    name: string;
  }
        
  const person = new Person();
  person.name = "Jane";
  
  console.log(person);


  // Parameter Properties

  class Person1 {
    public constructor(private name: string) {}
  
    public getName(): string {
      return this.name;
    }
  }
        
  const person1 = new Person1("JAY");
  
  console.log(person1.getName());


  //Inheritance: Implements

  //Interfaces can be used to define the type a class must follow through the implements keyword.


  interface Shape {
    getArea: () => number;
  }
  
  class Rectangle1 implements Shape {
    public constructor(protected readonly width: number, protected readonly height: number) {}
  
    public getArea(): number {
      return this.width * this.height;
    }
  }
  
  const myRect = new Rectangle1(10,20);
  
  console.log(myRect.getArea());

  //Inheritance: Extends

  //Classes can extend each other through the extends keyword. A class can only extends one other class.


  interface Shape {
    getArea: () => number;
  }
        
  class Rectangle2 implements Shape {
    public constructor(protected readonly width: number, protected readonly height: number) {}
  
    public getArea(): number {
      return this.width * this.height;
    }
  }
        
  class Square1 extends Rectangle2 {
    public constructor(width: number) {
      super(width, width);
    }
    // getArea gets inherited from Rectangle
  }
  
  const mySq1 = new Square1(20);
  
  console.log(mySq1.getArea());

//Override


//When a class extends another class, it can replace the members of the parent class with the same name.
//Newer versions of TypeScript allow explicitly marking this with the override keyword.


interface Shape {
    getArea: () => number;
  }
  
  class Rectangle3 implements Shape {
    // using protected for these members allows access from classes that extend from this class, such as Square
    public constructor(protected readonly width: number, protected readonly height: number) {}
  
    public getArea(): number {
      return this.width * this.height;
    }
  
    public toString(): string {
      return `Rectangle[width=${this.width}, height=${this.height}]`;
    }
  }
  
  class Square extends Rectangle3 {
    public constructor(width: number) {
      super(width, width);
    }
  
    // this toString replaces the toString from Rectangle
    public override toString(): string {
      return `Square[width=${this.width}]`;
    }
  }
  
  const mySq = new Square(20);
  
  console.log(mySq.toString());


  // Abstract Classes
  //Classes can be written in a way that allows them to be used as a base class for other classes without having to implement all the members. This is done by using the abstract keyword. Members that are left unimplemented also use the abstract keyword.

  abstract class Polygon {
    public abstract getArea(): number;
  
    public toString(): string {
      return `Polygon[area=${this.getArea()}]`;
    }
  }
  
  class Rectangle extends Polygon {
    public constructor(protected readonly width: number, protected readonly height: number) {
      super();
    }
  
    public getArea(): number {
      return this.width * this.height;
    }
  }