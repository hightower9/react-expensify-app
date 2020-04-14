const promise = new Promise( (resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'Alister',
        //     age: 26
        // }); //you can you only one argument or an object
        // resolve('This is my resolved data');    //you can only use one resolve call.
        reject('Something went wrong');
    }, 5000);
});

console.log('before');

promise.then((data) => {
    console.log('1', data);

    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve('This is my other promise');
        }, 5000);
    });;  //this is passed to str
}).then((str) => {
    console.log('does this run?', str);
}).catch((error) => {
    console.log('error: ', error);
});    // you can use catch handler like this or as 2nd arg of then like below

// promise.then((data) => {
//     console.log('1', data);
// }, (error) => {
//     console.log('error: ', error);
// });

console.log('after');