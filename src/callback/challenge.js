//Clase 5 Peticiones a Apis con Callback
//AJAX
//This object is usefull to make requests to an api, cloud, etc..
let xmlHttpRequest = require('xmlhttprequest').xmlHttpRequest;

let API = 'https://rickandmortyapi.com/api/character/'

function fetchData(urlApi, callback){
    let xhttp = new xmlHttpRequest();
    xhttp.open('GET', urlApi, true); //true is if the function is a sync or async function
    xhttp.onreadystatechange = function(event){ //if onreadystate change, execute the function we give it after the equal
        if (xhttp.readyState === 4) { // there are different states, in this case if it is 4 means that has been completed
            if(xhttp.status === 200){
                callback(null, JSON.parse(xhttp.responseText));
            }else{
                const error = new Error('Error'+ urlApi);
                return callback(error, null)
            }
        }
    }
    xhttp.send();//send, send the solicitude
};

fetchData(API, function(error1,data1) {
    if(error1) return console.error(error1);
        fetchData(API + data1.results[0].id, function (error2, data2){
        if (error2) return console.error(error2);
            fetchData(data2.origin.url, function(error3, data3){
            if (error3) return console.errer(error3);
                console.log(data1.info.count);
                console.log(data2.name);
                console.log(data3.dimension);
        })
    })
});