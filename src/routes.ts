import express from 'express';

const routes = express.Router();

/*
import XxxxController from './controllers/XxxxController';
const yyyyController = new XxxxController();

routes.get('/xxxxroute',yyyyController.index);
//  get(index) | get(show) | post(create) | put(update) | delete(delete)
*/
import EquipmentController from './controllers/EquipmentController';
const equipmentController = new EquipmentController();

routes.get('/equipments',equipmentController.index);

export default routes;