const { Given, When, Then } = require('@wdio/cucumber-framework');
var assert = require('assert');

Given("I open the home page", async () => {
    await browser.url(`https://www.newegg.com`);
});

When("I enter the word {string} in the search bar", async (query) => {
    await $('.header2021-search-box > input:nth-child(1)').setValue(query);
});

When("I click the search", async () => {
    await $('button.ico-search').click(); 
})

Then("I see at least one item appears", async () => {
    const cells = await $$(".item-cell");
    await expect(cells).toBeElementsArrayOfSize({gte: 1});
});

When("I open Today's Best Deals tab", async () => {
    await $(`div.swiper-slide-active:nth-child(2)`).click();
})

When('I Click on the Internet shop logo', async () => {
    await $(".header2021-logo-img").click();
})

Then('I see that the main page opened', async () => {
    const url = await browser.getUrl();
    assert.equal(url, 'https://www.newegg.com/');
})