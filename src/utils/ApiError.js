class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        stackt = ""
    ) { 
        super(message)
        this.statusCode = statusCode
        this.data = null 
        this.message = message
        this.success = false
        this.errors = errors

        if(statck){
            this.statck = stackt
        } else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiError}