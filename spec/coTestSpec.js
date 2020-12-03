const expect = require('chai').expect;

const coTest = require('../src/coTest');
const CarInsurance = coTest.CarInsurance;
const Product = coTest.Product;

describe("Co Test", function() {

  it("Normal Coverage for 1 day", function() {
    const coTest = new CarInsurance([ new Product("Medium Coverage", 10, 20) ]);
    const products = coTest.updatePrice();
    expect(products[0].price).equal(19);
  });

  it("Normal Coverage for 1 day, date passed", function() {
    const coTest = new CarInsurance([ new Product("Medium Coverage", -1, 20) ]);
    const products = coTest.updatePrice();
    expect(products[0].price).equal(18);
  });

  it("Full Coverage for 1 day", function() {
    const coTest = new CarInsurance([ new Product("Full Coverage", 2, 0) ]);
    const products = coTest.updatePrice();
    expect(products[0].price).equal(1);
  });

  it("Full Coverage for 1 day, date passed", function() {
    const coTest = new CarInsurance([ new Product("Full Coverage", -1, 20) ]);
    const products = coTest.updatePrice();
    expect(products[0].price).equal(22);
  });

  it("Low Coverage for 1 day", function() {
    const coTest = new CarInsurance([ new Product("Low Coverage", 5, 7) ]);
    const products = coTest.updatePrice();
    expect(products[0].price).equal(6);
  });

  it("Mega Coverage for 1 day", function() {
    const coTest = new CarInsurance([ new Product("Mega Coverage", 0, 80) ]);
    const products = coTest.updatePrice();
    expect(products[0].price).equal(80);
  });

  it("Special Full Coverage Coverage for 1 day", function() {
    const coTest = new CarInsurance([ new Product("Special Full Coverage", 15, 20) ]);
    const products = coTest.updatePrice();
    expect(products[0].price).equal(21);
  });

  it("Special Full Coverage Coverage for 1 day, date < 10 days", function() {
    const coTest = new CarInsurance([ new Product("Special Full Coverage", 9, 15) ]);
    const products = coTest.updatePrice();
    expect(products[0].price).equal(17);
  });

  it("Special Full Coverage Coverage for 1 day, date < 5 days", function() {
    const coTest = new CarInsurance([ new Product("Special Full Coverage", 4, 15) ]);
    const products = coTest.updatePrice();
    expect(products[0].price).equal(18);
  });

  it("Special Full Coverage Coverage for 1 day, date < 0 days", function() {
    const coTest = new CarInsurance([ new Product("Special Full Coverage", -1, 15) ]);
    const products = coTest.updatePrice();
    expect(products[0].price).equal(0);
  });

  it("Super Sale Coverage for 1 day", function() {
    const coTest = new CarInsurance([ new Product("Super Sale", 3, 6) ]);
    const products = coTest.updatePrice();
    expect(products[0].price).equal(4);
  });

  it("Super Sale Coverage for 1 day, date passed", function() {
    const coTest = new CarInsurance([ new Product("Super Sale", -1, 16) ]);
    const products = coTest.updatePrice();
    expect(products[0].price).equal(12);
  });

});
