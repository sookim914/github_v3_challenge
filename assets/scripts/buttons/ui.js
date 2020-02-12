const api = require('./api')

const getReposSuccess = (data) => {
  // data.times is an array of five objects of repositories
  // set fiveRepos as data.items
  const fiveRepos = data.items
  // do map iteration to each element(repository) in an array
  fiveRepos.map(array => {
    // fiveRepos.indexOf(array) is part of each td's class name on the table
    $('.id-' + fiveRepos.indexOf(array)).html(array['id'])
    $('.name-' + fiveRepos.indexOf(array)).html(array['name'])
    $('.description-' + fiveRepos.indexOf(array)).html(array['description'])
    $('.number-of-stars-' + fiveRepos.indexOf(array)).html(array['stargazers_count'])
  })
}

const getUsersSuccess = (data) => {
  // data.times is an array of five objects of users
  // set fiveUsers as data.items
  const fiveUsers = data.items
  fiveUsers.map(array => {
    // fiveUsers.indexOf(array) is part of each td's class name on the table
    $('.user-id-' + fiveUsers.indexOf(array)).html(array['id'])
    $('.user-login-' + fiveUsers.indexOf(array)).html(array['login'])
    // get the image url and display the picture using img tag
    $('.user-avatar-' + fiveUsers.indexOf(array)).html(`<img atl="avatar" src=${array['avatar_url']} width=150 height=150>`)
    // send  get request to get the number of followers using username (login)
    api.getFollowers(array.login)
      // display number of followers
      .then(data =>
        $('.user-followers-' + fiveUsers.indexOf(array)).html(data['followers']))
      .catch(onfailure)
  })
}

const onfailure = () => {
  console.log('error')
}

module.exports = {
  getReposSuccess,
  getUsersSuccess,
  onfailure
}
