import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	webServer: [
		{
			command: `yarn build && yarn start:integration`,
			port: 4173
		},
		{
			command: `yarn dev:integration`,
			port: 4174
		}
	],
	testDir: 'tests',
	testMatch: /(.+\.)?test\.ts/,
	fullyParallel: true,
	workers: `100%`
};

export default config;
