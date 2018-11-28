// const fs = require('fs')
const path = require('path')
const markdownMagic = require('markdown-magic')
const markdownConfig = require('./markdown.config')

const updateMarkdownFiles = async () => {
  const markdownPath = path.join(__dirname, 'README.md')
  await markdownMagic(markdownPath, markdownConfig)
}

updateMarkdownFiles()
