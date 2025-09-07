/**
 * Waits for an element to be visible.
 * @param {import('@playwright/test').Locator} locator
 * @param {number} timeout
 */
async function waitForElement(locator, timeout = 5000) {
  await locator.waitFor({ state: 'visible', timeout });
}

/**
 * Waits for an element to be hidden.
 * @param {import('@playwright/test').Locator} locator
 * @param {number} timeout
 */
async function waitForElementToDisappear(locator, timeout = 5000) {
  await locator.waitFor({ state: 'hidden', timeout });
}

module.exports = {
  waitForElement,
  waitForElementToDisappear,
};
