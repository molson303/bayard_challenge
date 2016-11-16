exports.up = function(knex, Promise) {
  return knex.schema.createTable('services', function(table){
    table.increments();
    table.string('mainservice');
    table.string('serviceone');
    table.string('servicetwo');
    table.string('servicethree');
    table.string('servicefour');

    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('services');
};
