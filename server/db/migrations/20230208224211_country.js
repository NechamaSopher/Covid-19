
exports.up = knex => {
  return knex.schema.createTable('country', t => {
    t.uuid('id').primary().default(knex.raw('gen_random_uuid()'));
    t.timestamps(true, true);
    t.string('code');
    t.string('name');
    t.string('continent')
  });
};

exports.down = knex => {
  return knex.schema.dropTableIfExists('country');
};