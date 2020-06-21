import { Request, Response } from 'express';
import knex from '../database/connection';

class SessionController{
    async create(req:Request,res:Response){
        const { username, password } = req.body;
        const user_info = await knex('users').where('username',username).select('id','password');
        if(user_info.length == 1){
            //console.log(`ID: ${user_info[0].id}\tPassword: ${user_info[0].password}`);
            if(password==user_info[0].password){
                //console.log("Senha correta")
                return res.json(user_info[0].id)
            }
            else{
                return res.json({error:"Senha incorreta... Tente novamente"})
            }
        }
        else{
            return res.json({error:"Usuario incorreto"})
        }
        
    }
}

export default SessionController;