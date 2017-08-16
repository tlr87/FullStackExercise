exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('AddToDataTable', (table) => {
    table.increments('id')
    table.string('otherText')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('AddToDataTable')
};
