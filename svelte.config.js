import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			// We need to disable polyfills or TS type checker (`svelte-check` via `yarn run check`) will error with:
			// Error: Debug Failure. Expected [object Object] === [object Object]. Parameter symbol already has a cached type which differs from newly assigned type
			// I assume this is because the types defined by the polyfills are conflicting with the types defined by `@types/node`.
			// We can safely disable polyfills on Node 20+.
			// See https://kit.svelte.dev/docs/adapter-node#options-polyfill
			polyfill: false
		})
	}
};

export default config;
