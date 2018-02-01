const checker = str => {
  const num = str.length + 1
  let sum = str.split("").reduce((acumulator, value, index) => {
    return acumulator + value * (num - index)
  }, 0)
  const check = sum % 11
  return check < 2 ? 0 : 11 - check
}

export const validarCPF = values => {
  const str = values.replace(/\.|-|\s/g, "")

  if (str.length !== 11) {
    return false
  }

  if (str.split("").every(v => v === str[0])) {
    return false
  }

  const v1 = checker(str.substring(0, 9))
  const v2 = checker(str.substring(0, 9) + v1.toString())

  if (str.substring(9, 11) === v1.toString() + v2.toString()) {
    return true
  }
  return false
}

export const validarData = str => {
  const [mes, ano] = str.split("/").map(v => v * 1)

  const currentDate = new Date()
  const currentMonth = currentDate.getMonth() + 1
  if (mes <= currentMonth || mes > 12) {
    return false
  }

  const currentYear = currentDate.getFullYear()
  if (ano < currentYear) {
    return false
  }

  return true
}
