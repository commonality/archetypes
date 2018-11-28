const markdownMagicGithubContributors = require('markdown-magic-github-contributors')
const markdownMagicDependencyTable = require('markdown-magic-dependency-table')
const markdownMagicDirectoryTree = require('markdown-magic-directory-tree')
const markdownMagicPackageScripts = require('markdown-magic-package-scripts')

const markdownConfig = {
  callback(err) {
    if (err) {
      console.error(err)
    } else {
      console.log('Markdown documents updated successfully.')
    }
  },
  'transforms': {
    'CONTRIBUTORS': markdownMagicGithubContributors({
      secret: process.env.GH_TOKEN,
      format: 'table',
      repo: 'commonality/archetypes'
    }),
    'DEPENDENCYTABLE': markdownMagicDependencyTable,
    'DIRTREE': markdownMagicDirectoryTree,
    'SCRIPTS': markdownMagicPackageScripts
  },
  'DEBUG': false
}

module.exports = markdownConfig
