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
    for(let product of this.products) {
    
      product.sellIn -= 1

      switch (product.name) {
        case 'Full Coverage':
          this.fullCoverage(product)
          break
        case 'Mega Coverage':
          product.sellIn += 1
          // do nothing
          break
        case 'Special Full Coverage':
          this.specialFullCoverage(product)
          break
        case 'Super Sale':
          this.superSale(product)
          break
        default:
          this.normalCoverage(product)
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
