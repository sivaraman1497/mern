import express from 'express';
import {create, check, login} from '../controllers/authcontroller.js';
import {verify, profile} from '../middlewares/authMiddleware.js';

const router = express.Router();
router.post('/createUser', create);
router.post('/checkUser', check);
router.post('/loginUser', login);
router.get('/login', verify, profile);      // call verify first, then call profile in the next queue

export default router;