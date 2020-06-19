import Knex from 'knex';

export async function up(knex:Knex){
    return knex.schema.createTable('user_equipments', table => {
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users');
        table.integer('equipment_id')
            .notNullable()
            .references('id')
            .inTable('equipments')
    });
}

export async function down(knex:Knex){
    return knex.schema.dropTable('user_equipments');
}