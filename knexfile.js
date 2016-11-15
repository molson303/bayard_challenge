require('dotenv').config({silent: true});

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/bayard_development'
  },

  production: {
    client: 'pg',
    connection: process.env.HEROKU_POSTGRESQL_RED_URL + '?ssl=true'
  }

};
