export default class CustomError {
    static createError({ name = "Error", cause, message, code }) {
        const error = new Error(message);
        error.name = name;
        error.code = code;
        error.cause = cause;
        throw error;
    }
}
