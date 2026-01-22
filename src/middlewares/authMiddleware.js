import jwt from 'jsonwebtoken';

export const verify = (req, res, next) => {
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer'))
    {
        let token = req.headers.authorization.split(' ')[1];
        
        if(!token)
        {
            res.status(401).json({message: 'Authorization failed due to missing token'})
        }

        try
        {
            const decoded = jwt.verify(token, process.env.JWT_TOKEN);
            req.user = decoded;
            next();
        }
        catch(err)
        {
            res.status(401).json({message: 'Invalid token'});
            console.log(err.message)
        }
    }
}

export const profile = (req, res) => {
    res.status(200).json({message: 'User logged in', userid: req.user.userid, email: req.user.email, role: req.user.role});
}
