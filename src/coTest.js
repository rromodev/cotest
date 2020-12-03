class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }
}

class CarInsurance {
  constructor(products = []) {
    this.products = products;
  }
  updatePrice() {
    for (var i = 0; i < this.products.length; i++) {
      this.products[i].sellIn -= 1

      switch (this.products[i].name) {
        case 'Full Coverage':
          this.fullCoverage(this.products[i])
          break
        case 'Mega Coverage':
          this.products[i].sellIn += 1
          // do nothing
          break
        case 'Special Full Coverage':
          this.specialFullCoverage(this.products[i])
          break
        case 'Super Sale':
          this.superSale(this.products[i])
          break
        default:
          this.normalCoverage(this.products[i])
      }
    }

    return this.products;
  }

  normalCoverage(product) {
    
    if (product.price > 0) {
      product.price -= 1
    }
    
    if (product.sellIn < 0 && product.price > 0) {
      product.price -= 1
    }
  }

  fullCoverage(product) {
    
    if (product.price < 50) {
      product.price += 1
    }

    if (product.sellIn < 0 && product.price < 50) {
      product.price += 1
    }
  }

  specialFullCoverage(product) {
    if (product.price < 50) {
      product.price += 1
      
      if(product.sellIn < 5 && product.price < 50) {
        product.price += 1
      }

      if(product.sellIn < 10 && product.price < 50) {
        product.price += 1
      }
    }

    if (product.sellIn < 0 ) {
      product.price = 0
    }
  }

  superSale(product) {
    if (product.price > 0) {
      product.price -= 2
    }
    
    if (product.sellIn < 0 && product.price > 0) {
      product.price -= 2
    }
  }
}

module.exports = {
  Product,
  CarInsurance
}
