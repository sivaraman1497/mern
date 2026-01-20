import {createUser, checkUser, loginUser} from '../services/authservices.js'
import {stop} from '../utils/customutils.js'

export const create = async(req, res) => {
    try
    {
        const user = await createUser(req.body);
        res.status(200).json(user);
    }
    catch(err)
    {
        console.log(err.message);
        res.status(400).json({message: 'Error creating user'})
    }
}

export const check = async(req, res) => {
    try
    {
        const user = await checkUser(req.body.email)
        res.status(200).json(user)
    }   
    catch(err)
    {
        res.status(404).json({message: 'No record found'})
        console.log(err.message)
    }
}

export const login = async(req, res) => {
    try
    {
        const user = await loginUser(req.body);
        res.status(200).json(user);
    }
    catch(err)
    {
        res.status(404).json({message: 'Invalid email or password'});
        console.log(err.message)
    }
}