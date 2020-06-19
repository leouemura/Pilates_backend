import Knex from 'knex';

export async function seed(knex:Knex){
    await knex('equipments').delete();
    await knex('equipments').insert([
        {title: 'Bola de Pilates', image: 'Bola-de-Pilates.png'},
        {title: 'Cadillac', image: 'Cadillac.png'},
        {title: 'Caixa Reformer', image: 'Caixa-Reformer.png'},
        {title: 'Faixas Elásticas', image: 'Faixas-Elasticas.png'},
        {title: 'Ladder Barrel', image: 'Ladder-Barrel.png'},
        {title: 'Prancha de Molas', image: 'Prancha-de-Molas.png'},
        {title: 'Rampa', image: 'Rampa.png'},
        {title: 'Reformer', image: 'Reformer.png'},
        {title: 'Reformer Torre', image: 'Reformer-Torre.png'},
        {title: 'Step Chair', image: 'Step-Chair.png'},
        {title: 'Wall Unit', image: 'Wall-Unit.png'},
        /*
        {title: '', image: '.png'},
        {title: '', image: '.png'},
        {title: '', image: '.png'},
        {title: '', image: '.png'},
        {title: '', image: '.png'},
        {title: '', image: '.png'},
        */
    ]);
    
}