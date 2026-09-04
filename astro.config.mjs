// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import svelte from '@astrojs/svelte';
import stylex from '@stylexjs/unplugin';

// https://astro.build/config
export default defineConfig({
	site: 'https://thevipinmishra.github.io',
	adapter: cloudflare({
		// Build-time Sharp for prerendered pages; noop at runtime for any SSR routes
		imageService: 'compile',
		// StyleX / Sharp / fonts need Node APIs during prerender
		prerenderEnvironment: 'node',
	}),
	// No Sessions API — skip Workers KV provisioning
	session: false,
	integrations: [svelte()],
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Instrument Serif',
			cssVariable: '--font-display',
			weights: [400],
			styles: ['normal', 'italic'],
			fallbacks: ['Georgia', 'serif'],
		},
		{
			provider: fontProviders.google(),
			name: 'Figtree',
			cssVariable: '--font-body',
			weights: ['300 700'],
			styles: ['normal'],
			fallbacks: ['ui-sans-serif', 'sans-serif'],
		},
	],
	vite: {
		plugins: [
			// Place StyleX before framework plugins. Production CSS is appended to
			// the imported global.css asset; virtual:stylex.css is DEV-only (BaseLayout).
			stylex.vite({
				// Keep StyleX above the global `reset` layer so atomic rules win
				// over unlayered-equivalent resets (avoids !important workarounds).
				useCSSLayers: {
					before: ['reset'],
				},
				dev: process.env.NODE_ENV !== 'production',
				runtimeInjection: false,
			}),
		],
	},
});
