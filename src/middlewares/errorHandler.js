export default function errorHandler(err, req, res, next) {
    console.log(`[ERROR] ${err.name}: ${err.message}`);

    res.status(500).json({
        status: "error",
        code: err.code || 500,
        message: err.message,
        cause: err.cause || null,
    });
}
