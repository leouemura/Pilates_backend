import express from 'express';

import EquipmentController from './controllers/EquipmentController';
import UserController from './controllers/UserController';

const routes = express.Router();


const equipmentController = new EquipmentController();
const userController = new UserController();




routes.get('/equipments',equipmentController.index);
routes.post('/users',userController.create);
routes.get('/users',userController.index)

export default routes;





/*
import XxxxController from './controllers/XxxxController';
const yyyyController = new XxxxController();

routes.get('/xxxxroute',yyyyController.index);
//  get(index) | get(show) | post(create) | put(update) | delete(delete)
*/