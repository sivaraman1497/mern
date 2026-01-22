export const authorize = (...roles) => {
    return (req, res, next) => {
        if(!roles.includes(req.user.role))      // check if user role is in the allowed roles [in db admin, user] + [in token admin, user]
        {
            return res.status(403).json({'message': 'Forbidden'})
        }
        next();
    }
}