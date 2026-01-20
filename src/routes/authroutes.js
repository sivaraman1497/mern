import express from 'express';
import {create, check} from '../controllers/authcontroller.js'

const router = express.Router();
router.post('/createUser', create);
router.post('/checkUser', check);

export default router;