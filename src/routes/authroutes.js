import express from 'express';
import {create, check, login} from '../controllers/authcontroller.js'

const router = express.Router();
router.post('/createUser', create);
router.post('/checkUser', check);
router.post('/loginUser', login);

export default router;