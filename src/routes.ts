import express from 'express';

import EquipmentController from './controllers/EquipmentController';
import UserController from './controllers/UserController';
import SessionController from './controllers/SessionController';
import CustomerController from './controllers/CustomerController';

const routes = express.Router();


const equipmentController = new EquipmentController();
const userController = new UserController();
const sessionController = new SessionController();
const customerController = new CustomerController();





routes.get('/equipments',equipmentController.index);

routes.post('/users',userController.create);
routes.get('/users',userController.index);

routes.post('/sessions', sessionController.create);

routes.post('/customers', customerController.create);
routes.get('/customers', customerController.index);



export default routes;





/*
import XxxxController from './controllers/XxxxController';
const yyyyController = new XxxxController();

routes.get('/xxxxroute',yyyyController.index);
//  get(index) | get(show) | post(create) | put(update) | delete(delete)
*/