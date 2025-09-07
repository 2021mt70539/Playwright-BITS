const { expect } = require('@playwright/test');

/**
 * Asserts that a locator contains expected text.
 * @param {import('@playwright/test').Locator} locator
 * @param {string} expectedText
 */
async function assertText(locator, expectedText) {
  await expect(locator).toHaveText(expectedText);
}

/**
 * Asserts that a locator is visible.
 * @param {import('@playwright/test').Locator} locator
 */
async function assertVisible(locator) {
  await expect(locator).toBeVisible();
}

module.exports = {
  assertText,
  assertVisible,
};
