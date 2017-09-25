exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('DataTable').del()
    .then(function () {
      // Inserts seed entries
      return knex('DataTable').insert([
        {id: 1, text: 'Joe', numbers:20, url:'https://dummyimage.com/400&text=Image_01'},
        {id: 2, text: 'Ted',numbers:30, url:'https://dummyimage.com/400&text=Image_02'},
        {id: 3, text: 'Bob',numbers:50, url:'https://dummyimage.com/400&text=Image_03'}
      ]);
    });
};
