  // QUESTION 3:Person class to hold details
  class Person {
    constructor(name, age, location) {
      this.name = name;
      this.age = age;
      this.location = location;
    }
    displayDetails() {
      console.log(`Name: ${this.name}, Age: ${this.age}, Location: ${this.location}`);
    }
  }
  // Example
  const person1 = new Person("gopinath", 22, "neyveli");
  person1.displayDetails();