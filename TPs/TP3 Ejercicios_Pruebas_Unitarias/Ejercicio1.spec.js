/*
1. Validar código PIN
Los bancos utilizan un código PIN numérico como parte de la autenticación de los usuarios. Dicho PIN debe cumplir con los siguientes requerimientos:

PIN de exáctamente 4 o 6 dígitos.
No puede contener letras.
La función debe retornar Verdadero si es el PIN es válido, caso contrario Falso.
*/

function validPin(pin){
    pin = String(pin)
    if (pin.length == 4 || pin.length == 6) {
        
        if (/^\d+$/.test(pin)) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}



//Tests
test("Validar Pin numérico", () => {
    expect(validPin(1234)).toBe(true)
})

test("Validar Pin numerico corto", () => {
    expect(validPin(12)).toBe(false)
})

test("Validar Pin no númerico", () => {
    expect(validPin("123ab4")).toBe(false)
})

test("Validar Pin 6 Digitos", () => {
    expect(validPin(123456)).toBe(true)
})

test("Validar pin con errores", () => {
    expect(validPin("abcd")).toBe(false)
})

