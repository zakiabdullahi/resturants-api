exports.seed = function (knex, Promise) {
  return knex('owners').insert([
    { name: 'Abdirahman Yusuf', email: 'abdirahman@gmail.com', created: '2022-03-30', updated: '2022-03-30' },
    { name: 'Fartun Jamac', email: 'fartun@gmail.com', created: '2022-03-30', updated: '2022-03-30' }
  ]);
};