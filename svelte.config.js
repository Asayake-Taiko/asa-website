import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// statically generate the app
		adapter: adapter(),
		// in github pages make the base path the repository name
		paths: {
            base: process.env.NODE_ENV === 'production' ? '/asa-website' : '',
        }
	}
};

export default config;
