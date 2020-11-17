const baseCon = require('./webpack.config.base')
const {merge}   = require('webpack-merge')

const devCon = {}

module.exports = merge(baseCon, devCon)
