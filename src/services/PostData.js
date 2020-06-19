export function PostData(type, userData) {

    let BaseUrl = 'https://account.cloud.com.ge/api/v1/';

    return new Promise((resolve, reject) => {

    fetch(BaseUrl + type, {
        method: 'POST',
        headers: new Headers({
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json;charset=UTF-8',
            'Authorization' : `Bearer ${sessionStorage.getItem('token')}`
          }),
        body: JSON.stringify(userData)
    })
    .then((response) => response.json())
    .then((responseJson) => {
        resolve(responseJson);
    })
    .catch((error) => {
      reject(error);
    });
    })
}