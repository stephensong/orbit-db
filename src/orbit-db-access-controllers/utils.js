'use strict'

const path = require('path')

// Make sure the given address has '/_access' as the last part
const ensureAddress = address => {
  const suffix = address.toString().split('/').pop()
  return suffix === '_access' ? address : path.join(address, '/_access')
}

exports.ensureAddress = ensureAddress
