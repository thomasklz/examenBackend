import express from 'express';
import {reserva, getHabitaciones,createHabitaciones,getHabitacionesForCine,getAsinetosDisponibleForHabitaciones} from '../controller/HabitacionesController.js';

const rotuer = express.Router();
rotuer.get('/habitaciones', getHabitaciones);
rotuer.post('/habitaciones', createHabitaciones);
rotuer.post('/habitaciones/reserva', reserva);
rotuer.get('/habitaciones/:id', getHabitacionesForCine);
rotuer.get('/habitaciones/disponibles/:id', getAsinetosDisponibleForHabitaciones);
export const RouterHabitacion = rotuer;
