const { test, expect } = require('@playwright/test');


test('Home page should have title',async({page})=>{
  await page.goto('http://localhost:5173/');
  await expect(page).toHaveTitle('Cars');
});

test('Home page should display Add button',async({page})=>{
    await page.goto('http://localhost:5173/');
    await expect(page.getByRole('button',{name:'Add'})).toBeVisible();
    }); 

test('Home page should display Table',async({page})=>{
    await page.goto('http://localhost:5173/');
    await expect(page.getByRole('table')).toBeVisible();
    });

test('Table of cars should have Name and action columns',async({page})=>{
    await page.goto('http://localhost:5173/');
    await expect(page.getByText('Name')).toBeVisible();
    await expect(page.getByText('Actions')).toBeVisible();
    });

test('Table should have View button', async ({ page }) => {
        await page.goto('http://localhost:5173/');
        const viewButton = page.locator('button:has-text("View")').first();
        await expect(viewButton).toBeVisible();
});

test('Table should have Delete button', async ({ page }) => {
        await page.goto('http://localhost:5173/');
        const deleteButton = page.locator('button:has-text("Delete")').first();
        await expect(deleteButton).toBeVisible();
});

test('Table should have correct data', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    const nameCell = page.locator('td:has-text("Smart Fortwo")').first();
    await expect(nameCell).toBeVisible();
    const nameCellHandle = await nameCell.elementHandle();
});

test('Clicking on Add button should navigate to Add page', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    const addButton = page.locator('button:has-text("Add")');
    await addButton.click();
    await expect(page.url()).toBe('http://localhost:5173/add');
});

test('Clicking on View button should navigate to View page', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    const viewButton = page.locator('button:has-text("View")').first();
    await viewButton.click();
    await expect(page.url()).toBe('http://localhost:5173/view/30');
});

test('Clicking on Delete button should delete the car', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    const firstRowNameCell = page.locator('tr td:first-child').first();
    const name = await firstRowNameCell.textContent();
    await expect(name).toBe('Smart Fortwo');
    const deleteButton = page.locator('button:has-text("Delete")').first();
    await deleteButton.click();
    const firstRowNameCellAfterDelete = page.locator('tr td:first-child').first();
    const nameAfterDelete = await firstRowNameCellAfterDelete.textContent();
    await expect(nameAfterDelete).toBe('Fiat 500');
});
