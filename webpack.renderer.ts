import { Configuration } from 'webpack'
import merge from 'webpack-merge'
import HTMLWebpackPlugin from 'html-webpack-plugin'

import base from './webpack.base'

export default function (): Configuration {
  return merge(base(), {
    entry: './src/renderer/index.tsx',
    output: {
      filename: 'renderer.js'
    },
    target: 'electron-renderer',
    plugins: [
      new HTMLWebpackPlugin({
        template: './template-index.html'
      })
    ]
  })
}
