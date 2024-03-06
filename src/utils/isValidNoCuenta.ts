export function isValidNoCuenta (param: string) {
    const newValue: string = param;
    const regexPattern = /^[a-zA-Z\d]+$/;

    if (regexPattern.test(newValue) || newValue === '' ) {
        return true
    }
    return false
};