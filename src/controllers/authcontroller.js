import {createUser, checkUser} from '../services/authservices.js'

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