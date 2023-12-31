export function notFound( req, res, next ) {
    const error = new Error( `Not Found - ${ req.originalUrl }` )
    res.status( 404 )
    next( error )
}

export function errorHandler( err, req, res, next ) {
    res.status( res.statusCode || 500 ).json( {
        error: err.message,
    } )
    next()
}
