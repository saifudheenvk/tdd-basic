const HTTP_STATUS = require('http-status-codes');


class CustomError extends Error {  
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

  class BadRequestError extends CustomError {
    status = HTTP_STATUS.BAD_REQUEST;
  
    constructor(message) {
      super(message);
    }
  }

  class ServerError extends CustomError {
    status = HTTP_STATUS.SERVICE_UNAVAILABLE;
  
    constructor(message) {
      super(message);
    }
  }

  module.exports = {
    CustomError,
    BadRequestError,
    ServerError
  }