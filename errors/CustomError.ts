export class CustomError extends Error {
    errorcode: number;
    constructor(message: string, errorCode: number) {
        super(message);
        this.name = 'CustomError';
        this.errorcode = errorCode;
    }
}