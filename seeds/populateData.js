exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('DataTable').del()
    .then(function () {
      // Inserts seed entries
      return knex('DataTable').insert([
        {id: 1, text: 'Joe',number:20, foreign_id: 003},
        {id: 2, text: 'Ted',number:30, foreign_id: 003},
        {id: 3, text: 'Bob',number:50, foreign_id: 001}
      ]);
    });
};
