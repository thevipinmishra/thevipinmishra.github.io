// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import svelte from '@astrojs/svelte';
import stylex from '@stylexjs/unplugin';

// https://astro.build/config
export default defineConfig({
	site: 'https://thevipinmishra.github.io',
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
			stylex.vite({
				useCSSLayers: true,
				dev: process.env.NODE_ENV !== 'production',
				runtimeInjection: false,
			}),
		],
	},
});
