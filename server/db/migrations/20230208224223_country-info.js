exports.up = knex => {
  return knex.schema.createTable('country_info', t => {
    t.uuid('id').primary().default(knex.raw('gen_random_uuid()'));
    t.timestamps(true, true);
    t.uuid('country_id').references('country.id').notNullable().onDelete('RESTRICT').onUpdate('RESTRICT');
    t.datetime('last_updated_date');
    t.integer('total_cases');
    t.integer('total_deaths');
    t.integer('new_cases');
  });
};

exports.down = knex => {
  return knex.schema.dropTableIfExists('country_info');
};