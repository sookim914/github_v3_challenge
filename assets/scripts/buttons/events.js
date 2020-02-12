const api = require('./api')
const ui = require('./ui')

const onGetRepos = (event) => {
  // when 'Repos' button is clicked, prevent from freshing the page
  event.preventDefault()
  // send get request by calling getRepos() in api.js
  api.getRepos()
    // if the request was successful, call getReposSuccess
    .then(ui.getReposSuccess)
    // if not, call onfailure
    .catch(ui.onfailure)
}

const onGetUsers = (event) => {
  // when 'Users' button is clicked, prevent from freshing the page
  event.preventDefault()
  // send get request by calling getUsers() in api.js
  api.getUsers()
    // if the request was successful, call getUsersSuccess
    .then(ui.getUsersSuccess)
    // if not, call onfailure
    .catch(ui.onfailure)
}

module.exports = {
  onGetRepos,
  onGetUsers
}
