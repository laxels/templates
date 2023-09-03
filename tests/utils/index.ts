import type { Page } from '@playwright/test';

const INTEGRATION_SERVER_URL = `http://localhost:4173`;
const INTEGRATION_DEV_SERVER_URL = `http://localhost:4174`;

export async function goto(page: Page, path: string, devServer = false): Promise<void> {
	await page.goto(`${devServer ? INTEGRATION_DEV_SERVER_URL : INTEGRATION_SERVER_URL}${path}`);
}
