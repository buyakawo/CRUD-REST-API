//centralized error handling

//an error-handling middleware must has 4 parameters
const errorHandling = (err, req, res, next) => {
    console.log(err.stack);
    // a standardized JSON response
    res.status(500).json({
        status: 500,
        message: "Something went wrong",
        error: err.message,
    })

}

export default errorHandling;