import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'TRI-HERMES',
			social: {
				github: 'https://github.com/r-grandorder/tri-hermes',
				discord: 'https://discord.gg/GzxxEwjzpU',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
	output: 'hybrid',
	adapter: vercel(),
});
