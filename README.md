# ComparaOnline Test Requirements Specification

Hi, welcome to the Software Engineer CO Test.

The code updates the price of products of our business unit, Car Insurance, based on rules explained bellow.

Here you have a description of the products.

- All Products have a `sellIn` value which denotes the number of days we have to sell the product.
- All Products have a `price` value which denotes how much the product cost.
- At the end of each day our system lowers both values for every product.

Pretty simple, right? Well this is where it gets interesting:

- Once the sell by date has passed, `price` degrades twice as fast.
- The `price` of a product is never negative.
- **"Full Coverage"** actually increases in `price` the older it gets.
- The `price` of a product is never more than 50.
- **"Mega Coverage"**, being a legendary product, never has to be sold or decreases in `price`.
- **"Special Full Coverage"**, like full coverage, increases in `price` as its `sellIn` value approaches:
	- `price` increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but.
	- `price` drops to 0 after the concert (and the product is not valid anymore).

We have recently released a new kind of product *Super Sale product*. This requires an update to our system:

- **"Super Sale"** Products degrade in `price` twice as fast as normal Products.

Feel free to make any changes to the `updatePrice` method and add any new code as long as everything
still works correctly. However, do not alter the `Product` class.

## Final notes

Just for clarification, a product can never have its `price` increase above 50, however **"Mega Coverage"** is a
legendary product and as such its `price` is 80 and it never alters.
