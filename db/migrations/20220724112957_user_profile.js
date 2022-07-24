/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('user_profile', function(table) {
		table.increments('id');
		table.string('first_name',255).notNullable();
		table.string('last_name', 255);
		table.string('department', 255);
		table.string('designation', 255);
		table.string('image_url', 255);
		table.string('city', 255);
		table.string('country', 255);
		table.string('bio', 255);
		table.json('social_links');
		table.integer('employee_id');
		table.integer('tenant_id').unsigned().nullable();
		// add foreign keys:
		table.foreign('tenant_id').references('tenant_profile.id');
		table.timestamp('created_at').defaultTo(knex.fn.now());
		table.timestamp('updated_at').defaultTo(knex.fn.now());
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('user_profile');
};
