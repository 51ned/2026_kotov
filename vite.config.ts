import path from 'path'

import { defineConfig } from 'vite'
import type { ConfigEnv } from 'vite'

import { sveltekit } from '@sveltejs/kit/vite'

import browserslist from 'browserslist'
import { browserslistToTargets, Features } from 'lightningcss'


export default ({ mode }: ConfigEnv) => {
  const isProd = mode === 'production'

  const genDevName = (name: string, filename: string, css: string) => {
    const file = path.basename(filename, path.extname(filename))
    const hash = Buffer
      .from(css)
      .toString('base64url')
      .substring(0, 3)

    return `${file.replace(/\.module$/, '')}_${name}_${hash}`
  }

  return defineConfig({
    build: {
      cssMinify: 'lightningcss'
    },

    css: {
      transformer: 'lightningcss',

      lightningcss: {
        drafts: {
          customMedia: true
        },
        include: Features.CustomMediaQueries,
        targets: browserslistToTargets(
          browserslist('last 2 versions, > 0.25%, not dead')
        )
      },

      modules: {
        generateScopedName: isProd
          ? '[hash:base64:2]'
          : genDevName
      }
    },

    plugins: [
      sveltekit()
    ]
  })
}