
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('AddToDataTable').del()
    .then(function () {
      // Inserts seed entries
      return knex('AddToDataTable').insert([
        {id: 1, otherText: 'Doctor'},
        {id: 2, otherText: 'Builder'},
        {id: 3, otherText: 'Plumber'}
      ]);
    });
};
