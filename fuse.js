'use strict'

const { FuseBox, VuePlugin, WebIndexPlugin } = require('fuse-box')

const fsbx = FuseBox.init({
    homeDir: './src',
    output: 'dist/app.js',
    plugins: [
        VuePlugin(),
        WebIndexPlugin({ template: './src/index.html' })
    ]
})

fsbx.dev()

fsbx.bundle('app.js')
    .instructions('>index.ts')
    .watch()

fsbx.run()
