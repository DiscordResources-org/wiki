// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const themes = require('prism-react-renderer').themes;
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

const userWidgetInlinePlugin = require('./src/plugins/userWidgetInlinePlugin');
const inviteWidgetPlugin = require('./src/plugins/inviteWidgetPlugin');
const linebreakPlugins = require('./src/plugins/linebreakPlugin');
const blogAuthorWidgetPlugin = require('./src/plugins/blogAuthorWidgetPlugin');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Discord Resources',
	tagline:
		'A list of tons of useful discord resources and utilities for all types of users, from beginners to power users.',
	url: 'https://discordresources.org',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	organizationName: 'Discord-Resources-Wiki',
	projectName: 'Discord-Resources-Wiki',

	// i18n: {
	// 	defaultLocale: "en",
	// 	locales: ["de"]
	//   },
	plugins: [
		() => ({
			name: "inject-tag",
			injectHtmlTags() {
				return {
					headTags: [{ tagName: "script", attributes: { src: 'https://stats.sattler.dev/js/script.js/', 'data-domain': 'discordresources.org', defer: true } }],
				};
			},
		}),
	],
	presets: [
		[
			'@docusaurus/preset-classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					editUrl: 'https://github.com/DiscordResources-org/wiki/edit/master',
					path: 'wiki',
					routeBasePath: '/',
					remarkPlugins: [linebreakPlugins, inviteWidgetPlugin, userWidgetInlinePlugin],
				},
				blog: {
					path: 'blog',
					routeBasePath: '/blog/',
					showReadingTime: true,
					remarkPlugins: [
						linebreakPlugins,
						inviteWidgetPlugin,
						blogAuthorWidgetPlugin,
						userWidgetInlinePlugin,
					],
				},
				theme: {
					customCss: [
						require.resolve('inter-ui/inter.css'),
						require.resolve('./src/css/custom.css'),
					],
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			// We don't set the description and title here to assure that the right og:tags will be delivered per page.
			metadata: [
				{
					name: 'og:image',
					content: 'https://discordresources.org/img/logo-background.png',
				},
				{
					name: 'theme-color',
					content: '#e58996',
				},
				{
					name: 'twitter:card',
					content: 'summary',
				},
			],
			colorMode: {
				defaultMode: 'dark'
			},
			navbar: {
				title: 'Discord Resources',
				logo: {
					alt: 'Discord Resources Site Logo',
					src: 'https://discordresources.org/img/logo-small.png',
					href: '/',
				},
				items: [
					{
						to: '/',
						label: 'Wiki',
						position: 'left',
					},
					{
						to: 'blog',
						label: 'Blog',
						position: 'left',
					},
					{
						href: 'https://github.com/DiscordResources-org/wiki',
						className: 'navbar-item-github',
						position: 'right',
					},
					{
						href: 'https://discord.gg/8hJEvHr7rq',
						className: 'navbar-item-discord',
						position: 'right',
					},
					{
						type: 'localeDropdown',
						position: 'right',
					}
				],
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
			algolia: {
				// The application ID provided by Algolia
				appId: 'KO08RT1BUB',

				// Public API key: it is safe to commit it
				apiKey: '90b11a8ac9c24d6fc6aa7aa88c159215',

				indexName: 'discordresources',
			},
		}),
};

module.exports = config;
