const errorHandler = (err, req, res, next) => {
    console.error("🔥 Error capturado:", err);

    // Error custom con status
    if (err.status) {
        return res.status(err.status).json({
            status: "error",
            message: err.message
        });
    }

    // Error inesperado
    res.status(500).json({
        status: "error",
        message: "Internal server error"
    });
};

export default errorHandler;