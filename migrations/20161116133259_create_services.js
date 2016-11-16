exports.up = function(knex, Promise) {
  return knex.schema.createTable('service', function(table){
    table.increments();
    table.text('service');
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('service');
};
