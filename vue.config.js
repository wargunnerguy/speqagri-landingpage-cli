module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '/speqagri-landingpage-cli/' : '/',
	pages: {
		index: {
			// entry for the page
			entry: 'src/main.js',
			title: 'CLI SPEQ Agri',
		},
	},
	pluginOptions: {
		i18n: {
			locale: 'et',
			fallbackLocale: 'en',
			localeDir: 'lang',
			enableLegacy: false,
			runtimeOnly: false,
			compositionOnly: false,
			fullInstall: true
		}
	}
}
