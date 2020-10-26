// Api url
const apiUrl = "http://127.0.0.1:4000";
const ratesUrl = apiUrl + "/rates";

// Get list of rates
function getRates() {
  return fetch(ratesUrl, {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((response) => response.json())
    .then((responseData) => {
      return responseData;
    });
}

// Post new rate
function postRate(rateObj) {
  return fetch(ratesUrl, {
    method: 'POST',
    body: JSON.stringify(rateObj),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(dat => {
    return dat.status;

  });
}

export default {
  postRate,
  getRates
}