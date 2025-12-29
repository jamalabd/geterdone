import jwt from 'jsonwebtoken';


function verifyJwtMiddleware (req, res, next) {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;
    if(!token) return res.status(401).json({ error: 'No token found in header'});
    
    try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    return next();
    } catch(error){
        if(error.name === 'TokenExpiredError') return res.status(401).json({ error: 'Token expired'});
        return res.status(401).json({ error: 'Invalid token'});
    }

};

export default verifyJwtMiddleware;