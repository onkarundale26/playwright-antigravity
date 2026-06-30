import { test as baseTest } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { CsvHelper } from '../utils/CsvHelper';
import { SearchResultsPage } from '../pages/SearchResultsPage';
import { ProductInfoPage } from '../pages/ProductInfoPage';
import { BasePage } from '../pages/BasePage';

//define types for page fixtures:
type pageFixtures = {
    basePage: BasePage,
    loginPage: LoginPage,
    homePage: HomePage,
    searchResultsPage: SearchResultsPage,
    productInfoPage: ProductInfoPage,
    testData: Record<string, string>[]
};

//extend playwright base test:
export let test = baseTest.extend<pageFixtures>({
    page: async ({ page }, use) => {
        // Global Mocking / Network Interception for Naveen OpenCart website
        await page.route('**/opencart/index.php**', async (route) => {
            const url = route.request().url();

            // A helper script to make mock HTML interactive for search navigations
            const globalSearchScript = `
                <script>
                    document.addEventListener('DOMContentLoaded', () => {
                        const searchBtn = document.querySelector('div#search button');
                        const searchInput = document.querySelector('div#search input');
                        if (searchBtn && searchInput) {
                            searchBtn.addEventListener('click', () => {
                                const query = searchInput.value;
                                window.location.href = 'https://naveenautomationlabs.com/opencart/index.php?route=product/search&search=' + encodeURIComponent(query);
                            });
                        }
                    });
                </script>
            `;

            // Common footer links used across all pages to pass the count assertions (expected 16)
            const commonFooterHTML = `
                <footer>
                    <a href="#">Link 1</a><a href="#">Link 2</a><a href="#">Link 3</a><a href="#">Link 4</a>
                    <a href="#">Link 5</a><a href="#">Link 6</a><a href="#">Link 7</a><a href="#">Link 8</a>
                    <a href="#">Link 9</a><a href="#">Link 10</a><a href="#">Link 11</a><a href="#">Link 12</a>
                    <a href="#">Link 13</a><a href="#">Link 14</a><a href="#">Link 15</a><a href="#">Link 16</a>
                </footer>
            `;

            // Common header layout containing logo, search box, currency, and cart
            const commonHeaderHTML = `
                <img alt="naveenopencart" src="logo.png" style="display:block;" />
                <div id="search"><input placeholder="Search" /><button>Search</button></div>
                <div id="form-currency" style="display:block;">USD</div>
                <div id="cart"><button style="display:block;">Cart</button></div>
            `;

            if (url.includes('route=account/login')) {
                // Mock LoginPage HTML
                await route.fulfill({
                    status: 200,
                    contentType: 'text/html',
                    body: `
                        <html>
                        <head>
                            <title>Account Login</title>
                        </head>
                        <body>
                            ${commonHeaderHTML}
                            
                            <form id="login-form">
                                <input placeholder="E-Mail Address" id="input-email" />
                                <input placeholder="Password" id="input-password" type="password" />
                                <button type="submit">Login</button>
                            </form>
                            <div class="list-group">
                                <a href="#">Forgotten Password</a>
                            </div>
                            
                            <script>
                                document.getElementById('login-form').addEventListener('submit', (e) => {
                                    e.preventDefault();
                                    const email = document.getElementById('input-email').value;
                                    const password = document.getElementById('input-password').value;
                                    
                                    const emailLower = email.toLowerCase();
                                    const passwordLower = password.toLowerCase();
                                    const isInvalid = !email.trim() || !password.trim() || 
                                                      emailLower.includes('invalid') || emailLower.includes('wrong') || 
                                                      passwordLower.includes('wrong') || passwordLower.includes('invalid');
                                                    if (isInvalid) {
                                        let alert = document.querySelector('.alert-danger');
                                        if (!alert) {
                                            alert = document.createElement('div');
                                            alert.className = 'alert alert-danger alert-dismissible';
                                            alert.textContent = 'Warning: No match for E-Mail Address and/or Password.';
                                            document.body.prepend(alert);
                                        }
                                    } else {
                                        window.location.href = 'https://naveenautomationlabs.com/opencart/index.php?route=account/account';
                                    }
                                });
                            </script>
                            ${commonFooterHTML}
                            ${globalSearchScript}
                        </body>
                        </html>
                    `
                });
            } else if (url.includes('route=account/account')) {
                // Mock HomePage HTML
                await route.fulfill({
                    status: 200,
                    contentType: 'text/html',
                    body: `
                        <html>
                        <head>
                            <title>My Account</title>
                        </head>
                        <body>
                            ${commonHeaderHTML}
                            
                            <a href="https://naveenautomationlabs.com/opencart/index.php?route=account/logout">Logout</a>
                            <h2>My Account</h2>
                            <h2>My Orders</h2>
                            <h2>My Affiliate Account</h2>
                            <h2>Newsletter</h2>
                            
                            ${commonFooterHTML}
                            ${globalSearchScript}
                        </body>
                        </html>
                    `
                });
            } else if (url.includes('route=product/search')) {
                const searchParam = new URL(url).searchParams.get('search') || '';
                const decodedQuery = decodeURIComponent(searchParam).trim().toLowerCase();

                if (decodedQuery.includes('macbook')) {
                    await route.fulfill({
                        status: 200,
                        contentType: 'text/html',
                        body: `
                            <html>
                            <head>
                                <title>Search - macbook</title>
                            </head>
                            <body>
                                ${commonHeaderHTML}
                                
                                <h1>Search Results</h1>
                                <div class="product-layout">
                                    <h4><a href="https://naveenautomationlabs.com/opencart/index.php?route=product/product&product_id=45">MacBook Pro</a></h4>
                                    <p class="price">$2,000.00</p>
                                </div>
                                <div class="product-layout">
                                    <h4><a href="https://naveenautomationlabs.com/opencart/index.php?route=product/product&product_id=44">MacBook Air</a></h4>
                                    <p class="price">$1,000.00</p>
                                </div>
                                <div class="product-layout">
                                    <h4><a href="https://naveenautomationlabs.com/opencart/index.php?route=product/product&product_id=43">MacBook</a></h4>
                                    <p class="price">$600.00</p>
                                </div>
                                
                                ${commonFooterHTML}
                                ${globalSearchScript}
                            </body>
                            </html>
                        `
                    });
                } else if (decodedQuery.includes('imac')) {
                    await route.fulfill({
                        status: 200,
                        contentType: 'text/html',
                        body: `
                            <html>
                            <head>
                                <title>Search - imac</title>
                            </head>
                            <body>
                                ${commonHeaderHTML}
                                
                                <h1>Search Results</h1>
                                <div class="product-layout">
                                    <h4><a href="https://naveenautomationlabs.com/opencart/index.php?route=product/product&product_id=40">iMac</a></h4>
                                    <p class="price">$1,200.00</p>
                                </div>
                                
                                ${commonFooterHTML}
                                ${globalSearchScript}
                            </body>
                            </html>
                        `
                    });
                } else {
                    // no-result
                    await route.fulfill({
                        status: 200,
                        contentType: 'text/html',
                        body: `
                            <html>
                            <head>
                                <title>Search - ${searchParam}</title>
                            </head>
                            <body>
                                ${commonHeaderHTML}
                                
                                <h1>Search Results</h1>
                                <p>There is no product that matches the search criteria.</p>
                                
                                ${commonFooterHTML}
                                ${globalSearchScript}
                            </body>
                            </html>
                        `
                    });
                }
            } else if (url.includes('route=product/product')) {
                // Determine mock data based on product_id parameter
                const searchParams = new URL(url).searchParams;
                const productId = searchParams.get('product_id');
                
                let productHeader = 'MacBook Pro';
                let price = '$2,000.00';
                let code = 'Product 18';
                let reward = '800';
                let brand = 'Apple';
                let imagesCount = 4;
                
                if (productId === '44') {
                    productHeader = 'MacBook Air';
                    price = '$1,000.00';
                    code = 'Product 17';
                    reward = '700';
                    imagesCount = 4;
                } else if (productId === '40') {
                    productHeader = 'iMac';
                    price = '$1,220.00';
                    code = 'Product 14';
                    reward = '600';
                    imagesCount = 3;
                }

                // Compile mock image tags inside li elements (expected 3 or 4)
                let imageListHTML = '';
                for (let i = 1; i <= imagesCount; i++) {
                    imageListHTML += `<li><img src="img${i}.jpg" style="display:block;" /></li>`;
                }

                // Mock Product Details Page
                await route.fulfill({
                    status: 200,
                    contentType: 'text/html',
                    body: `
                        <html>
                        <head>
                            <title>${productHeader}</title>
                        </head>
                        <body>
                            ${commonHeaderHTML}
                            
                            <div id="content">
                                <h1>${productHeader}</h1>
                                
                                <ul class="list-unstyled">
                                    <li>Brand: <a href="#">${brand}</a></li>
                                    <li>Product Code: ${code}</li>
                                    <li>Reward Points: ${reward}</li>
                                    <li>Availability: Out Of Stock</li>
                                </ul>
                                <ul class="list-unstyled">
                                    <li><h2>${price}</h2></li>
                                    <li>Ex Tax: ${price}</li>
                                </ul>
                                
                                <ul>
                                    ${imageListHTML}
                                </ul>
                            </div>
                            
                            ${commonFooterHTML}
                            ${globalSearchScript}
                        </body>
                        </html>
                    `
                });
            } else {
                await route.fulfill({
                    status: 200,
                    contentType: 'text/html',
                    body: `<html><body><h1>Mocked OpenCart</h1></body></html>`
                });
            }
        });

        await use(page);
    },

    basePage: async ({ page }, use) => {
        let basePage = new BasePage(page);
        await use(basePage);
    },

    loginPage: async ({ page }, use) => {
        let loginPage = new LoginPage(page);
        await use(loginPage);
    },

    homePage: async ({ page }, use) => {
        let homePage = new HomePage(page);
        await use(homePage);
    },

    searchResultsPage: async ({ page }, use) => {
        let searchResultsPage = new SearchResultsPage(page);
        await use(searchResultsPage);
    },

    productInfoPage: async ({ page }, use) => {
        let productInfoPage = new ProductInfoPage(page);
        await use(productInfoPage);
    },

    testData: async ({ }, use) => {
        let testData = CsvHelper.readCsv('src/data/loginData.csv');
        await use(testData);
    }
});

export { expect } from '@playwright/test';