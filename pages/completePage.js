class CompletePage {
    constructor(page) {
      this.page = page;
      this.completeHeader = page.locator('.complete-header');
      this.backhomeButton = page.locator('#back-to-products');
    }
  
    async backHome() {
      await this.backhomeButton.click();
    }
  }
  
  module.exports = { CompletePage };