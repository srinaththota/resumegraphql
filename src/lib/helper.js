exports.formatError = (errorList = []) => {
    let formatedErrors = [];
    for (let i = 0; i < errorList.length; i++) {
      let error = {
        fieldName: errorList[i].context.key,
        message: errorList[i].message
      }
      formatedErrors.push(error);
    }
    return formatedErrors;
   }
   
   exports.validationError = (errors = []) => {
    return{
      errors:{
        message: 'A validation error',
        name: 'ValidationError',
        data: errors
      }
    } 
   }
  