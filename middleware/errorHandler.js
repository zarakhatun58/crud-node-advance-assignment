const errorHandler=(req, res, next, error)=>{
    res.send(error.message)
}

module.export=errorHandler;