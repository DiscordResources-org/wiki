// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const blogAuthorPlugin = require('./src/plugins/blogAuthor');
const inviteWidgetPlugin = require('./src/plugins/inviteWidgetPlugin');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Discord Wiki',
    tagline: 'A comprehensive compilation of valuable Discord tools and assets for users of all levels, from novices to experts.',
    favicon: 'img/favicon.ico',
    url: 'https://discordresources.org',
    baseUrl: '/',
    organizationName: 'Discord Wiki',
    projectName: 'Discord Wiki',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },
    plugins: [
        () => ({
            name: "inject-tag",
            injectHtmlTags() {
                return {
                    headTags: [{
                        tagName: "script",
                        attributes: {
                            src: 'https://stats.sattler.dev/js/script.js',
                            'data-domain': 'discordresources.org',
                            defer: true
                        }
                    }],
                };
            },
        }),
    ],
    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    path: 'wiki',
                    routeBasePath: '/',
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/DiscordResources-org/wiki/edit/master',
                    remarkPlugins: [inviteWidgetPlugin],
                },
                blog: {
                    path: 'blog',
                    routeBasePath: '/blog/',
                    showReadingTime: true,
                    editUrl: 'https://github.com/DiscordResources-org/wiki/edit/master',
                    remarkPlugins: [blogAuthorPlugin, inviteWidgetPlugin],
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],
    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/docusaurus-social-card.jpg',
            navbar: {
                title: 'My Site',
                logo: {
                    alt: 'My Site Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'tutorialSidebar',
                        position: 'left',
                        label: 'Tutorial',
                    },
                    {to: '/blog', label: 'Blog', position: 'left'},
                    {
                        href: 'https://github.com/facebook/docusaurus',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Tutorial',
                                to: '/docs/intro',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Stack Overflow',
                                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                            },
                            {
                                label: 'Discord',
                                href: 'https://discordapp.com/invite/docusaurus',
                            },
                            {
                                label: 'Twitter',
                                href: 'https://twitter.com/docusaurus',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'Blog',
                                to: '/blog',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/facebook/docusaurus',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
