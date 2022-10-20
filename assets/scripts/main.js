// function getData(url, callBack = (res) => { }) {
//     let res;
//     fetch(`${url}`)
//         .then((res) => res.json())
//         .then((resData) => {
//             callBack(resData)
//         }).catch((err) => console.log(err))
// }
// function postData(url, body, callBack) {
//     let response;
//     fetch(`${url}`, {
//         method: "POST",
//         body: JSON.stringify(body),
//         headers: {
//             'Content-type': 'application/json'
//         }
//     }).then((res) => res.json())
//         .then((json) => {
//             response = json
//             callBack()
//         })
// }

// const base = "https://jsonplaceholder.typicode.com/";
// const base2 = "https://cryptudeapibackend.herokuapp.com/api/v1/cryptos";

// // getData(base2, (res)=>{console.log(res)})
// // postData(base, body, () => { console.log('what') })

// Setting current date and time
setInterval(() => {
    const full_date = new Date().toLocaleDateString(); //Date String
    const full_time = new Date().toLocaleTimeString(); // Time String
    document.querySelector(".todayDate").innerText = `${full_date}, ${full_time}`
}, 1000);


let isLoggedIn = false;
localStorage.setItem("isLoggedIn", true)
isLoggedIn = Boolean(localStorage.getItem("isLoggedIn"))

console.log(isLoggedIn)