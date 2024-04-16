const { test, expect } = require('@playwright/test');


test('After pressing Add button, a new car should be added', async ({page}) => {
    await page.goto('http://localhost:5173/add');
    await page.fill('input[id="carId"]', '0');
    expect(page.locator('input[id="carId"]').first()).toHaveValue('0');
    await page.fill('input[id="carName"]', 'Toyota Corolla');
    expect(page.locator('input[id="carName"]').first()).toHaveValue('Toyota Corolla');
    await page.fill('input[id="carModel"]', '2022');
    expect(page.locator('input[id="carModel"]').first()).toHaveValue('2022');
    await page.fill('input[id="carColor"]', 'Black');
    expect(page.locator('input[id="carColor"]').first()).toHaveValue('Black');
    await page.fill('input[id="carPrice"]', '27000');
    expect(page.locator('input[id="carPrice"]').first()).toHaveValue('27000');
    const submitButton = page.locator('button:has-text("Add")').first();
    await submitButton.click();
    await expect(page.url()).toBe('http://localhost:5173/');
    const nameCell = page.locator('td:has-text("Toyota Corolla")').first();
    await expect(nameCell).toBeVisible();
    });