const RE = /^[A-Za-z0-9]{1,16}$/;

export function isValidNoCuenta(param: unknown): param is string {
    return typeof param === 'string' && RE.test(param);
}
