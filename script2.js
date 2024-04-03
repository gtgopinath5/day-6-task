//QUESTION 2:
// Convert the UML diagram to Typescript class. - use number for double
// -radius :double = 1.0
// -color:String = "red"
// +Circle()
// +Circle(radius:double)
// +Circle(radius:double, color:String)
//  +getRadius ((: double
//  +setRadius (radius:double) :void
//  +getColor r() : String
//  +setColor (color:String):void
// +toString():String-------"Circle[radius=?,color=?]"
// +getArea():double
// +getCircumference() :double
//------------------------------------------------------------------------------------------------
class Circle {
    constructor(radius = 1.0, color = "red") {
      this.radius = radius;
      this.color = color;
    }
    getRadius() {
      return this.radius;
    }
    setRadius(radius) {
      this.radius = radius;
    }
    getColor() {
      return this.color;
    }
  
    setColor(color) {
      this.color = color;
    }
    toString() {
      return `Circle[radius=${this.radius},color=${this.color}]`;
    }
    getArea() {
      return Math.PI * this.radius * this.radius;
    }
    getCircumference() {
      return 2 * Math.PI * this.radius;
    }
  }
  
  // Example 
  const circle1 = new Circle();
  console.log(circle1.toString()); 
  console.log(circle1.getArea());
  console.log(circle1.getCircumference());

  