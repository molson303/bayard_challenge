var knex = require('../db/knex');

module.exports = {
    all: function () {
    return knex.raw(`SELECT * from service`)
  }
}
