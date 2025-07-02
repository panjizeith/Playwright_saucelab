class InventoryPage {
    constructor(page) {
      this.page = page;
      this.addToCartButton = page.locator('.inventory_item button');
      this.cartBadge = page.locator('.shopping_cart_badge');
      this.cartLink = page.locator('.shopping_cart_link');
    }
  
    async addFirstItemToCart() {
      await this.addToCartButton.first().click();
    }
  
    async getCartBadgeCount() {
      return this.cartBadge.innerText();
    }
  
    async goToCart() {
      await this.cartLink.click();
    }
  }
  
  module.exports = { InventoryPage };