'use strict'

const { FuseBox, VuePlugin, SassPlugin, CSSPlugin, WebIndexPlugin, Sparky } = require('fuse-box')

const fsbx = FuseBox.init({
    homeDir: './src',
    output: 'dist/app.js',
    plugins: [
        VuePlugin(),
        [SassPlugin({ importer: true }), CSSPlugin({ group: 'app.css', outFile: './dist/app.css' })],
        WebIndexPlugin({ template: './src/index.html' })
    ]
})

Sparky.task('default', () => {
    return Sparky.watch('./assets', { base: './src' })
        .dest('./dist')
})

fsbx.dev()

fsbx.bundle('app.js')
    .instructions('>index.ts')
    .watch()

fsbx.run()
