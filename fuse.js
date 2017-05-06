'use strict'

const { FuseBox, VuePlugin, WebIndexPlugin, Sparky } = require('fuse-box')

const fsbx = FuseBox.init({
    homeDir: './src',
    output: 'dist/app.js',
    plugins: [
        VuePlugin(),
        WebIndexPlugin({ template: './src/index.html' })
    ]
})

Sparky.task('copyAssets', () => {
    return Sparky.watch('./assets', { base: './src' })
        .dest('./dist')
})

fsbx.dev()

fsbx.bundle('app.js')
    .instructions('>index.ts')
    .watch()

fsbx.run()
Sparky.start('copyAssets')
