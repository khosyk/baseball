/*
// 1.class declaration

class Person {

    //constructor
    constructor(name, age){
        //fileds
        this.name = name;
        this.age = age;
    }


    //methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const elie = new Person ('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();
*/

// Getter and setters
class User {
  constructor(firstName, lastName, age) {
    this, (firstName = firstName);
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    this._age = value < 0 ? 0 : value;
    // = if( vlue < 0 ){ value = 0 } else {value = value}
  }
}
const user1 = new User("Steve", "job", -1);
console.log(user1.age);

//static

class Article {
  static publisher = "Dream Coding";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

//Inheritance
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}

class Triangle extends Shape {
  draw() {
    console.log("say");
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
}

const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, "red");
triangle.draw();
console.log(triangle.getArea());
