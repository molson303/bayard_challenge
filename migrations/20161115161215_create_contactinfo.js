exports.up = function(knex, Promise) {
  return knex.schema.createTable('contacts', function(table){
    table.increments();
    table.string('name');
    table.string('email');
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('contacts');
};
