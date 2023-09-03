import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.test.ts']
	},
	server: {
		port: process.env.VITE_PORT ? Number(process.env.VITE_PORT) : undefined
	}
});
