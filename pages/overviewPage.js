class OverviewPage {
    constructor(page) {
      this.page = page;
      this.finishButton = page.locator('#finish');
      this.cancelButton = page.locator('#cancel')
    }
  
    async completeOrder() {
      await this.finishButton.click();
    }
    async cancelOrder(){
      await this.cancelButton.clik();
    }
  }
  
  module.exports = { OverviewPage };