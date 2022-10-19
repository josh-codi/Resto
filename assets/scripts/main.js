function getData(url, callBack = (res) => { }) {
    let res;
    fetch(`${url}`)
        .then((res) => res.json())
        .then((resData) => {
            callBack(resData)
        }).catch((err) => console.log(err))
}
function postData(url, body, callBack) {
    let response;
    fetch(`${url}`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            'Content-type': 'application/json'
        }
    }).then((res) => res.json())
        .then((json) => {
            response = json
            callBack()
        })
}

const base = "https://jsonplaceholder.typicode.com/";
const base2 = "https://cryptudeapibackend.herokuapp.com/api/v1/cryptos";

// getData(base2, (res)=>{console.log(res)})
// postData(base, body, () => { console.log('what') })
