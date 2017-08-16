exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('DataTable', (table) => {
    table.increments('id')
    table.string('text')
    table.float('number')
    table.float('foreign_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('DataTable')
};
