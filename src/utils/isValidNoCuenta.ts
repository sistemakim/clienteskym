export function isValidNoCuenta (param: string) {
    const newValue: string = param;
    const regexPattern = /^[a-zA-Z\d]+$/;
    console.log(param);
    

    if (regexPattern.test(newValue) || newValue === '' ) {
        return true
    }
    return false
};