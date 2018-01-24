
export const validarCPF = (value) => {
  const str = value.replace(/\.|-|\s/g, '')

  if (str.length !== 11) {
    return false
  }

  const nine = str.substring(0,9) // Primeiros 9 digitos
  const verificador = str.substring(9,11) // Ultimos 2 digitos

  // Os digitos são iguais?
  for (let i = 0; i < 10; i++) {
    if (str === Array(12).join(i)) {
      return false
    }
  }

  const v1 = calcChecker1(nine)
  const v2 = calcChecker2(`${nine}${v1}`)

  if (verificador.toString() === v1.toString() + v2.toString()) {
    return true
  }
  return false
}

function calcChecker1 (str) {
  let sum = null

  for (let j = 0; j < 9; ++j) {
    sum += str.toString().charAt(j) * (10 - j)
  }

  const verificador = sum % 11
  const v1 = (verificador < 2) ? 0 : 11 - verificador

  return v1
}

function calcChecker2 (str) {
  let sum = null

  for (let k = 0; k < 10; ++k) {
    sum += str.toString().charAt(k) * (11 - k)
  }

  const verificador = sum % 11
  const v2 = (verificador < 2) ? 0 : 11 - verificador

  return v2
}