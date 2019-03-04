const chai = require('chai');
const assert = chai.assert
const expect = chai.expect

const shouldBuyCar = require('../shouldBuyCar.js')

describe('#shouldBuyCar()', () => {
  it('should throw an error when there is no car', () => {
    const car = undefined
    expect((car) => shouldBuyCar()).to.throw()
  });
  it('should return false when there are no details about the car', () => {
    const car = {}
    const shouldBuy = shouldBuyCar(car)
    assert.isFalse(shouldBuy)
  });
  it('should return true when the car is pink', () => {
    const car = {
      color: 'pink'
    };
    const shouldBuy = shouldBuyCar(car)
    assert.isTrue(shouldBuy)
  })
  it('should return false if it\'s a hatchback ', () => {
    const car = {
      type: 'hatchback'
    };
    const shouldBuy = shouldBuyCar(car)
    assert.isFalse(shouldBuy)
  })
  it('should return false when the car is a hatchback and pink', () => {
    const car = {
      type: 'hatchback',
      color: 'pink'
    }
    const shouldBuy = shouldBuyCar(car)
    assert.isFalse(shouldBuy)
  });
  it('should return true when the car has 6 litres/100km and is under or equal to $5,000', () => {
    const car = {
      litresPer100km: 6,
      price: 4000
    }
    const shouldBuy = shouldBuyCar(car)
    assert.isTrue(shouldBuy)
  });
  it('should return true when the car has 11 litres/100km and is under or equal to $5,000', () => {
    const car = {
      litresPer100km: 11,
      price: 5000
    }
    const shouldBuy = shouldBuyCar(car)
    assert.isTrue(shouldBuy)
  });
  it(' should return false when the car has 6 litres/100km and is over $5,000', () => {
    const car = {
      litresPer100km: 6,
      price: 6000
    }
    const shouldBuy = shouldBuyCar(car)
    assert.isFalse(shouldBuy)
  });
  it('should return false when the car has 11 litres/100km and is over $5,000', () => {
    const car = {
      litresPer100km: 11,
      price: 6000
    }
    const shouldBuy = shouldBuyCar(car)
    assert.isFalse(shouldBuy)
  });
  it('should return false when the car has 5 litres/100km and is under or equal to $5,000', () => {
    const car = {
      litresPer100km: 5,
      price: 5000
    }
    const shouldBuy = shouldBuyCar(car)
    assert.isFalse(shouldBuy)
  });
  it('should return false when the car has 12 litres/100km and is under or equal to $5,000', () => {
    const car = {
      litresPer100km: 12,
      price: 5000
    }
    const shouldBuy = shouldBuyCar(car)
    assert.isFalse(shouldBuy)
  });
});