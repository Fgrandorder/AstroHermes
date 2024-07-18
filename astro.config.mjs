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
					label: 'Fate/Grand Order',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Main Story', link: '/fgo/main-story/' },
						{ label: 'Events', link: '/fgo/events/' },
						{ label: 'Servants', link: '/fgo/servants/' },
					],
				},
				/*{
					label: 'Source Material',
					autogenerate: { directory: 'reference' },
				},*/
				{
					label: 'Source Material',
					items: [
						{ label: 'Light Novels', link: '/source/light-novels/' },
						{ label: 'Visual Novels', link: '/source/visual-novels/' },
						{ label: 'Drama CDs', link: '/source/drama-cd/' },
						{ label: 'Games', link: '/source/games/' },
						{ label: 'Anime & Manga', link: '/source/anime-manga' },
					],
				},
				{
					label: 'Supplementals',
					items: [
						{ label: 'Materials', link: '/meta/materials/' },
						{ label: 'Interviews', link: '/meta/interviews' },
						{ label: 'Bamboo Diary', link: '/meta/bamboo-diary' },
						{ label: 'Community Content', link: '/meta/community/'},
					],
				},
			],
		}),
	],
	output: 'hybrid',
	adapter: vercel(),
});
