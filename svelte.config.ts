import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import adapter from '@sveltejs/adapter-static'


const config: import('@sveltejs/kit').Config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias: {
			$lib: 'src/lib',
			$routes: 'src/routes',
			$static: 'static',
      $stores: 'src/stores',
      $styles: 'src/styles',
      $utils: 'src/utils',
			$views: 'src/views'
		}
	}
}


export default config