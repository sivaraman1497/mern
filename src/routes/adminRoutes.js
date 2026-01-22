import express from 'express';
import {verify} from '../middlewares/authMiddleware.js';
import { authorize } from '../middlewares/roleMiddleware.js';

const router = express.Router();

router.get('/dashboard', verify, authorize('admin'), (req, res) => {        // admin role only
    res.status(200).json({message: 'Access granted for Admin'})
})

export default router;