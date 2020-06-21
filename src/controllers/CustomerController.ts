import { Request, Response } from 'express';
import knex from '../database/connection';
const crypto = require('crypto');

class CustomerController{
    async create(req:Request,res:Response){
        const id = crypto.randomBytes(4).toString('HEX');
        const {
            name,
            lastname,
            email,
            whatsapp
        } = req.body;
        const header_userID = req.headers.authorization;
        const user_id = String(header_userID)

        
        const db_customer = await knex('customers')
                                    .where('name',name)
                                    .where('lastname',lastname)
                                    .where('user_id',user_id)
                                    .select('name','lastname','user_id');
                                    
        if(db_customer.length==0){
            //console.log("NOVO CLIENTE")
            await knex('customers').insert({id,name,lastname,email,whatsapp, user_id})
            return res.json({name,lastname,user_id})
        }
        if(db_customer.length==1){
            if(user_id==db_customer[0].user_id){
                //console.log("Cliente ja cadastrado...")
                //console.log(db_customer[0].name,"\t",db_customer[0].lastname)
                return res.json({name,lastname,user_id})
            }
            else{
                //console.log("Diferente ID. Cadastrando novo cliente... ")
                await knex('customers').insert({id,name,lastname,email,whatsapp, user_id})
                return res.json({name,lastname,user_id})
            }
            
        }
        if(db_customer.length>1){
            console.log("LISTA: ",Object.values(db_customer))
            return res.status(400)
        }
        
    }

    async index(req:Request,res:Response){
        const header_userID = req.headers.authorization;
        const user_id = String(header_userID)
        const user_customer = await knex('customers').where('user_id',user_id).select('*');
        return res.json(user_customer)
    }
}

export default CustomerController;