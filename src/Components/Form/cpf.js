const checker = (str) => {
  const num = str.length + 1  
  let sum = str.split('').reduce((acumulator, value, index) => {
    return acumulator + value * (num-index)
  }, 0)
  const check = sum % 11
  return (check < 2) ? 0: 11 - check
}

export const validarCPF = (values) => {
  const str = values.replace(/\.|-|\s/g, '')
  // cpf deve conter 11 caracteres
  if (str.length !== 11) {
    return false
  }
  // são todos iguais?
  if (str.split('').every( v => v === str[0] )) {
    return false
  }
  
  const v1 = checker(str.substring(0,9)) // primeiro digito verificador
  const v2 = checker(str.substring(0,9) + v1.toString()) // segundo digito verificador
  
  // valor calculado é igual ao fornecido?
  if (str.substring(9,11) === v1.toString() + v2.toString()) {
    return true
  }
  return false    
}