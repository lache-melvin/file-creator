import { Configuration } from 'webpack'
import merge from 'webpack-merge'

import base from './webpack.base'

export default function (): Configuration {
  return merge(base(), {
    entry: './src/main/main.ts',
    output: {
      filename: 'main.js'
    },
    target: 'electron-main'
  })
}
