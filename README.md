🧪 Playwright Automated Tests for SauceDemo
This repository contains automated end-to-end tests for https://www.saucedemo.com using Playwright with JavaScript.

📌 What We Test
✅ Login

Valid login with standard user credentials

Invalid login (optional to add)

✅ Cart

Add item to cart and verify badge count

Remove item from cart

✅ Checkout

Complete checkout flow (enter name, address, finish order)

✅ Logout

Ensure logout redirects to login page

🚀 How to Run the Tests
1️⃣ Install dependencies
bash
Copy
Edit
npm install
2️⃣ Run all tests
bash
Copy
Edit
npx playwright test
3️⃣ Run a specific file
bash
Copy
Edit
npx playwright test tests/login.spec.js
4️⃣ Run with report
bash
Copy
Edit
npx playwright show-report
⚙ Project Structure
pgsql
Copy
Edit
.
├── tests/
│   ├── login.spec.js
│   ├── cart.spec.js
│   ├── checkout.spec.js
│   └── logout.spec.js
├── pages/
│   ├── LoginPage.js
│   ├── InventoryPage.js
│   ├── CartPage.js
│   └── CheckoutPage.js
├── testdata.js
└── README.md

📝 Notes

The credentials used for tests are stored in testdata.js

The framework uses Page Object Model (POM) for better structure

Screenshots on failure and HTML reports are enabled

✨ Bonus Features

Data-driven login tests

Parallel test execution supported

Easily extendable for more features

💡 Tip: To run in headed mode (visible browser):

npx playwright test --headed
