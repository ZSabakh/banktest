export function GetData(type) {

    let BaseUrl = 'https://account.cloud.com.ge/api/v1/';

    return new Promise((resolve, reject) => {

    fetch(BaseUrl + type, {
        method: 'GET',
        headers: new Headers({

            'Authorization' : `Bearer ${sessionStorage.getItem('token')}`
          }),
        
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