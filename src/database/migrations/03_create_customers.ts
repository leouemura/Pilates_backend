import Knex from 'knex';
export async function up(knex:Knex){
    return knex.schema.createTable('customers',table=>{
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('lastname').notNullable();
        table.string('email').nullable();
        table.string('whatsapp').nullable();
        table.string('user_id').notNullable();

        table.foreign('user_id').references('id').inTable('users');
    })
}
export async function down(knex:Knex){
    return knex.schema.dropTable('customers')
}