const checkPrice = (req, res, next) => {
    if (req.body.vintage) {
        return next();
    } else {
        res.status(400).json({ error: 'Vintage is required' });
    }
}