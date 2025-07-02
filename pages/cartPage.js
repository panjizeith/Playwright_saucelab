class CartPage {
    constructor(page) {
      this.page = page;
      this.cartItem = page.locator('.inventory_item_name');
      this.removeButton = page.locator('button[data-test="remove-sauce-labs-backpack"]');
      this.checkoutButton = page.locator('button[data-test="checkout"]');
    }
  
    async removeItem() {
      await this.removeButton.click();
    }
  
    async proceedToCheckout() {
      await this.checkoutButton.click();
    }
  }
  
  module.exports = { CartPage };