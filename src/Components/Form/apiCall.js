const api = "https://trackmob-frontend-test.firebaseio.com/RdMa77REkLXsh9ec0WcWNbff1dw2/carlosqsilva/donors.json"

export const apiPOST = (values) => {
  return fetch(api, {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(resp => {
    if(resp.ok) {
      return true
    } else {
      return false
    }
  }).catch(error => console.log(error.message))
}