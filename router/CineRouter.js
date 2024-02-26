import express from 'express';
import { createCine, getCine} from '../controller/CineController.js';
const rotuer = express.Router();


rotuer.post('/cine', createCine);
rotuer.get('/cine', getCine);


export const RouterCine = rotuer;