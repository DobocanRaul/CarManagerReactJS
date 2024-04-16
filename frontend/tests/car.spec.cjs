const { test, expect } = require('@playwright/test');

test('View page should have correct Header', async ({ page }) => {
    await page.goto('http://localhost:5173/view/1');
    await expect(page.getByText('Car details')).toBeVisible();
});

test('View page should have correct data', async ({ page }) => {
    await page.goto('http://localhost:5173/view/1');
    const idCell = page.locator('p:has-text("Car Id:1")').first();
    await expect(idCell).toBeVisible();
    const nameCell = page.locator('p:has-text("Name:Honda Civic")').first();
    await expect(nameCell).toBeVisible();
    const modelCell = page.locator('p:has-text("Model:2022")').first();
    await expect(modelCell).toBeVisible();
    const colorCell = page.locator('p:has-text("Color:Black")').first();
    await expect(colorCell).toBeVisible();
    const priceCell = page.locator('p:has-text("Price:27000")').first();
    await expect(priceCell).toBeVisible();
}
);

test('View page should have Back button', async ({ page }) => {
    await page.goto('http://localhost:5173/view/1');
    const backButton = page.locator('button:has-text("Home")');
    await expect(backButton).toBeVisible();
}
);

test('View page should have Edit button', async ({ page }) => {
    await page.goto('http://localhost:5173/view/1');
    const editButton = page.locator('button:has-text("Edit")');
    await expect(editButton).toBeVisible();
});

test('Clicking on Home button should navigate to Home page', async ({ page }) => {
    await page.goto('http://localhost:5173/view/1');
    expect(page.url()).toBe('http://localhost:5173/view/1'); 
    const backButton = page.locator('button:has-text("Home")');
    await backButton.click();
    await expect(page.url()).toBe('http://localhost:5173/');
});

test('Clicking on Edit button should navigate to Edit page', async ({ page }) => {
    await page.goto('http://localhost:5173/view/1');
    const editButton = page.locator('button:has-text("Edit")');
    await editButton.click();
    await expect(page.url()).toBe('http://localhost:5173/edit/1');
}
);