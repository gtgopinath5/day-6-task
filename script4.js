// QUESTION 4:write a class to calculate the Uber price.
class UberPriceCalculator {
    constructor(baseRate, distanceRate, timeRate) {
      this.baseRate = baseRate;
      this.distanceRate = distanceRate;
      this.timeRate = timeRate;
    }
    calculatePrice(distance, time) {
      const price = this.baseRate + this.distanceRate * distance + this.timeRate * time;
      return price;
    }
  }
  
  // Example
  const uberCalculator = new UberPriceCalculator(5.0, 1.5, 0.2);
  const rideDistance = 10; // in miles
  const rideTime = 20; // in minutes
  
  const totalPrice = uberCalculator.calculatePrice(rideDistance, rideTime);
  console.log(`Uber Price: Rs${totalPrice.toFixed(2)}`);
  

