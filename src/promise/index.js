//Clase 7: Implementando promesas.
//We create the function somethingWillHappen, we instance a promise with its two parameters,
//resolve to do something positive, reject in case we have an error
const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Correcto!');
        }else{
            reject('Whoops!');
        }
    });
};
//always .then is followed by the promise function
//in case we resolve, we give it a response
//in case it reject, we give it an error 
somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));

//Second example
somethingWillHappen2 = () => {
    return new Promise((resolve, reject) =>{
        if(true){
            setTimeout(() => {
                resolve('True');
            }, 3000);
        }else{
            const error = new Error('Whoops!'); //This is a good practice, put error as an instance
            reject(error);
        }
    })
}

somethingWillHappen2()
    .then(response => console.log(response))
    .then(() => console.log('Hola'))
    .catch(err => console.error(err));

//Promise.all
//we can give it an array of promises, and it shows two results
Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log('Array of results', response)
    })
    .catch(err =>{
        console.error(err);
    })