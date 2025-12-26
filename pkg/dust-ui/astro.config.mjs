// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';

const basePath = process.env.BASE_PATH;

// https://astro.build/config
export default defineConfig({
	base: basePath ? basePath : '/',
	site: 'https://charlyoleg2.github.io/dust-mono/',
	integrations: [
		starlight({
			title: 'Dust info and apps',
			logo: {src: './src/assets/dust-logo.svg'},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/charlyoleg2/dust-mono' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
		sitemap(),
	],
});
