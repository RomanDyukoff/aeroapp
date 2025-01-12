// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';
import { fileURLToPath } from 'url';

export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	srcDir: 'src/',
	dir: {
		layouts: 'app/layouts',
		pages: 'pages',
		middleware: 'app/middleware',
	},
	components: [
		{ path: '~/shared/ui', pathPrefix: false },
		{ path: '~/entities', pathPrefix: false },
		{ path: '~/features', pathPrefix: false },
	],
	alias: {
		'@': fileURLToPath(new URL('./src', import.meta.url)),
		'~': fileURLToPath(new URL('./src', import.meta.url)),
		'@app': fileURLToPath(new URL('./src/app', import.meta.url)),
		'@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
		'@features': fileURLToPath(new URL('./src/features', import.meta.url)),
		'@entities': fileURLToPath(new URL('./src/entities', import.meta.url)),
		'@shared': fileURLToPath(new URL('./src/shared', import.meta.url)),
	},
	modules: [
		'@pinia/nuxt',
		'@primevue/nuxt-module',
		'@nuxt/eslint',
		'@nuxt/image',
	],

	typescript: {
		strict: true,
		typeCheck: true,
	},

	imports: {
		dirs: ['entities/*/model', 'features/*/model'],
	},
});
