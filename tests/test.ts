import { expect, test } from '@playwright/test';
import { goto } from './utils';

test.describe(``, () => {
	test(``, async ({ page }) => {
		await goto(page, `/`);
		await expect(page.getByText(`HI MOM`)).toBeVisible();
	});
});

test.describe(`dev server`, () => {
	test(`runs properly`, async ({ page }) => {
		await goto(page, `/`, true);
	});
});
