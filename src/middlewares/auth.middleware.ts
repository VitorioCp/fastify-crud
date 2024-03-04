export function authMiddleware(req, reply){
    const apiEmail = req.header['email'];

    if(!apiEmail){
        reply.status(410).send({
            message: 'Email is required'
        });
    }
}