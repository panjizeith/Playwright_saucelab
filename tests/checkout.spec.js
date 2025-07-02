const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { InventoryPage } = require('../pages/inventoryPage');
const { CartPage } = require('../pages/cartPage');
const { CheckoutPage } = require('../pages/checkoutPage');
const { CompletePage } = require('../pages/completePage');

test.describe('Checkout Flow', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('should complete the checkout process successfully', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const completePage = new CompletePage(page)

    // Add item to cart
    await inventoryPage.addFirstItemToCart('Sauce Labs Backpack');
    await expect(inventoryPage.cartBadge).toHaveText('1');

    // Go to cart
    await inventoryPage.goToCart();
    await expect(cartPage.cartItem).toContainText('Sauce Labs Backpack');

    // Proceed to checkout
    await cartPage.proceedToCheckout();
    await checkoutPage.fillDetails('John', 'Doe', '12345');
    await checkoutPage.finish();

    // Verify completion
    await expect(completePage.completeHeader).toHaveText('Thank you for your order!');
  });
});