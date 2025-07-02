const { test, expect } = require('@playwright/test');
const { loginData } = require('../utils/testData'); 
const { LoginPage } = require('../pages/loginPage');

test.describe('Data-driven Login Tests', () => {
  loginData.forEach(data => {
    test(`Login test for ${data.username}`, async ({ page }) => {
      const loginPage = new LoginPage(page);
      await loginPage.goto();
      await loginPage.login(data.username, data.password);

      if (data.shouldPass) {
        await expect(page).toHaveURL(/inventory/);
      } else {
        await expect(page.locator('[data-test="error"]')).toBeVisible();
      }
    });
  });
});