'use strict'
const date = require('./date.js')

// Get five repositories that were created last month with most stars in descending order
const getRepos = (data) => {
  return $.ajax({
    url: 'https://api.github.com/search/repositories',
    method: 'GET',
    data: {
      q: 'created:' + date.date,
      sort: 'stars',
      order: 'desc',
      page: 1,
      per_page: 5
    }
  })
}

// Get five users that were created over last year with most followers in descending order
const getUsers = (data) => {
  return $.ajax({
    url: 'https://api.github.com/search/users',
    method: 'GET',
    data: {
      q: 'created:' + date.lastyear,
      sort: 'followers',
      order: 'desc',
      page: 1,
      per_page: 5
    }
  })
}

// Get user information using the username
// Returned information contains number of followers of the user
const getFollowers = (username) => {
  return $.ajax({
    url: 'https://api.github.com/users/' + username
  })
}
module.exports = {
  getRepos,
  getUsers,
  getFollowers
}
