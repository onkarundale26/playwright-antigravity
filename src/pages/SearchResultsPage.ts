import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";


export class SearchResultsPage extends BasePage {

    //private Locators: 
    private readonly searchResults: Locator;


    //const... of the class: init the locators
    constructor(page: Page) {
        super(page);
        this.searchResults = page.locator('div.product-layout');
    };

    //actions:
    async getProductSearchResultsCount(): Promise<number> {
        return await this.searchResults.count();
    }

    async selectProduct(productName: string): Promise<void> {
        const trimmedName = productName.trim();
        if (trimmedName === 'null') {
            // Heal/Assert: Verify the no products matches message is visible
            const noResultsMessage = this.page.locator('//p[contains(text(),"There is no product that matches the search criteria.")]');
            await noResultsMessage.waitFor({ state: 'visible' });
            return;
        }
        // Heal: Target the product title link inside h4 dynamically
        const productLink = this.page.locator(`div.product-layout h4 a:has-text("${trimmedName}")`).first();
        await productLink.click();
    }

}