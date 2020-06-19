import { Request, Response } from 'express';
import knex from '../database/connection';
const crypto = require('crypto');

class UserController{
    async create(req: Request,res: Response){
        const {
            name,
            username,
            password,
            email,
            whatsapp,
            equipments,
        } = req.body;

        //const trx = await knex.transaction();
        const id = crypto.randomBytes(4).toString('HEX');
        
        const db_UserDuplicate = await knex('users').where('username',username).select('username','email');
        const obj_user = db_UserDuplicate[0];
        
        if(db_UserDuplicate[0]==undefined){
            //console.log('Novo usuario');
            await knex('users').insert({id,name,username,password,email,whatsapp});
            //return res.json({id,name,username,password,email,whatsapp});//
        }/*
        else{
            if(db_UserDuplicate[1]==undefined){
                
                if((username===obj_user.username)&&(email===obj_user.email)){
                    console.log("Usuario e email ja existentes")
                    return res.json("Usuario e email ja existentes")//
                }
                else{
                    if(username===obj_user.username){
                        console.log('Usuario Existente');
                        return res.json("Usuario existente");//
                    }
                    if(email===obj_user.email){
                        console.log('E-mail Existente');
                        return res.json("E-mail existente");//
                    }
                }      
            }  
        }*/


        let user_id = id;
        if(db_UserDuplicate[0]==undefined){
            //console.log("New id")
            user_id = id
        }
        else{
            const get_id = await knex('users').where('username',username).select('id');
            //console.log("Database id")
            user_id = get_id[0].id;
        }
        

        let equipment_input_array:Number[] = []
        let equipment_db_array:Number[]= []
        const userEquipments = equipments.map((equipment_id:Number) => {
            //console.log(equipment_id)
            equipment_input_array.push(equipment_id)
            return{
                user_id,
                equipment_id
            }
        })          //equipamento input

        const db_EquipmentDuplicate = await knex('user_equipments').where('user_id',user_id).select('equipment_id');

        
        for (let index = 0; index < db_EquipmentDuplicate.length; index++) {
            let value_db:Number[] = Object.values(db_EquipmentDuplicate[index]);
            equipment_db_array.push(value_db[0])
        }
        
        //console.log(equipment_input_array);
        //console.log(equipment_db_array);
        
        if(db_UserDuplicate[0]==undefined){
            //console.log('Novo usuario... Adicionando Equipamentos');
            await knex('user_equipments').insert(userEquipments);
        }
        else{
            //console.log("Verificação")

            //no futuro alterar a logica
            //dps verificar se o usuario inseriu ou retirou um item no lugar de apagar td sempre
            let array_equipmentSize;
            if(equipment_db_array.length>=equipment_input_array.length){
                array_equipmentSize = equipment_db_array.length;
            }
            else{
                array_equipmentSize = equipment_input_array.length;
            }
            let equipmentCounter=0;
            for (let index = 0; index < array_equipmentSize; index++) {
                if(equipment_db_array[index]==equipment_input_array[index]){
                    equipmentCounter=equipmentCounter+1;
                }
            }


            if(equipmentCounter==array_equipmentSize){
                //console.log("IGUALZINHO")
            }
            else{
                //console.log("DELETA TD E COLOCA O INPUT NOVO")
                await knex('user_equipments').where('user_id',user_id).delete()
                await knex('user_equipments').insert(userEquipments);
            }
            
        }

        //await trx.commit();

        return res.json({
            id,name,username,password,email,whatsapp,
            userEquipments
        })



    }

    async index(req:Request, res:Response){
        const users = await knex('users').select('*')
        return res.json(users)
    }

    async update(req:Request, res:Response){
        
    }
        
}

export default UserController;