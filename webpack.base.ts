import path from 'path'
import { Configuration } from 'webpack'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'

export default function (): Configuration {
  return {
    mode: 'development',
    output: {
      path: path.join(__dirname, 'dist')
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
    },
    module: {
      rules: [
        {
          test: [/\.tsx?$/, /\.jsx?$/],
          use: 'babel-loader',
          include: path.join(__dirname, 'src'),
          exclude: /node_modules/
        }
      ]
    },
    devtool: 'source-map',
    plugins: [
      new ForkTsCheckerWebpackPlugin({
        typescript: {
          diagnosticOptions: {
            semantic: true,
            syntactic: true
          },
          mode: 'write-references'
        }
      })
    ]
  }
}
