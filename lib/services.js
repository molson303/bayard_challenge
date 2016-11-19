var knex = require('../db/knex');

module.exports = {
    all: function () {
    return knex.raw(`SELECT * from service`)
  },
    create: function (user) {
    return knex.raw(`INSERT into users (name, email)
    VALUES ('${user.name}','${user.email}') `)
  },


}
