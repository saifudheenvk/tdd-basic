import HTTP_STATUS from 'http-status-codes';


export class CustomError extends Error {  
    constructor(message) {
      super(message);
    }
  
    serializeErrors() {
      return {
        message: this.message,
        status: this.status
      };
    }
  }

  export class BadRequestError extends CustomError {
    status = HTTP_STATUS.BAD_REQUEST;
  
    constructor(message) {
      super(message);
    }
  }

  export class ServerError extends CustomError {
    status = HTTP_STATUS.SERVICE_UNAVAILABLE;
  
    constructor(message) {
      super(message);
    }
  }