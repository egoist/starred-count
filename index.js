'use strict'
const got = require('got')
const parse = require('parse-link-header')

/**
 * @param {string} username - GitHub username
 * @param {string} access_token - GitHub private token
 * @returns {Promise<Number>} A Promise to resolve the starred count
 */
module.exports = function (username, token) {
  if (!username || typeof username !== 'string') {
    throw new TypeError('Expected username to be a string!')
  }
  const query = {per_page: 1}
  if (token) {
    query.access_token = token
  }
  return got.get(`https://api.github.com/users/${username}/starred`, {
    query
  }).then(res => {
    const parsed = parse(res.headers.link)
    return (parsed && parsed.last) ? parseInt(parsed.last.page, 10) : 0
  })
}
