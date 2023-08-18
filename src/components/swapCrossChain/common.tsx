export const parseEthereumError = (exception: any) => {
  // console.log('parseEthereumError: ', exception);
  let objErr: any = {};
  let errorMessage = exception.toString();
  if (exception.tx || (exception.reason && exception.transaction)) {
    if (exception.tx && exception.error.error.body) {
      objErr = JSON.parse(exception.error.error.body);
      errorMessage = objErr.error.message;
    } else {
      errorMessage = exception.reason;
    }
  } else if (
    (exception.method || exception.requestMethod) &&
    !exception.errorArgs
  ) {
    if (exception.error) {
      if (exception.error.body) {
        objErr = JSON.parse(exception.error.body);
        errorMessage = objErr.error.message;
      } else {
        errorMessage = exception.error.toString();
      }
    } else {
      errorMessage = `[Smartcontract check] Address not found on chain`;
    }
  } else if (
    exception.argument ||
    exception.errorArgs ||
    exception.requestBody ||
    exception.code
  ) {
    if (exception.argument || exception.requestBody || exception.code) {
      if (exception.reason)
        errorMessage = `[Blockchain format check] ${exception.reason}`;
      else errorMessage = `[Blockchain format check] ${exception.data.message}`;
    } else {
      errorMessage = `[Smartcontract check] ${exception.reason}`;
    }
  } else if (Object.keys(exception).length === 0) {
    errorMessage = `[Self check] ${errorMessage}`;
  } else {
    errorMessage = "Unknown error";
  }
  const modifyErrorMessage = errorMessage.replace(
    "execution reverted:",
    "[Smartcontract check]"
  );
  return modifyErrorMessage;
};
