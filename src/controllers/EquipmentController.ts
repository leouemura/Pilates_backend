import {Request,Response} from 'express';
import knex from '../database/connection';

class EquipmentController{
    async index(req:Request,res:Response){
        const equipments = await knex('equipments').select('*');
    
        const serializedEquipments = equipments.map(equipment=>{
            return {
                id: equipment.id,
                title: equipment.title,
                image_url: `http://localhost:3333/uploads/${equipment.image}`,
            };
        });
    
        return res.json(serializedEquipments);
    }
}

export default EquipmentController;