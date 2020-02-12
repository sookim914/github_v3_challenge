'use strict'

// require event file
const buttons = require('./buttons/events')

$(() => {
  // when repo button is clicked, call onGetRepos
  $('#hot_repo').on('click', buttons.onGetRepos)
  // when user button is clicked, call onGet
  $('#prolific_users').on('click', buttons.onGetUsers)
})
