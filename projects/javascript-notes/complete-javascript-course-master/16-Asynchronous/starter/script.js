'use strict';


// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

// API
//https://countries-api-836d.onrender.com/countries/



///////////////////////////////////////
const countriesContainer = document.querySelector('.countries');

//Callback hell (when we have a lot of nested callback function for AjAX Calls)
const renderData = function (data, className = '') {
    const html = `
    <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
    </article>
    `
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
}



const renderError = function (errorMsg) {
    countriesContainer.insertAdjacentHTML('beforeend', errorMsg);
    // countriesContainer.style.opacity = 1;
}

const getJSON = function (url, errorMsg = '') {
    return fetch(url).then((response) => {
        if (!response.ok)
            throw new Error(`country not found (${response.status}) ${errorMsg}`);
        return response.json();
    })
}

// const getCountryData = function (country) {
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v2/name/${country}`);
//     request.send();
//     // console.log(request.responseText);
//     request.addEventListener('load', function () {
//         const [data] = JSON.parse(this.responseText);
//         console.log(data);
//         const html = `
//       <article class="country">
//           <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//           </div>
//         </article>
//     `
//         countriesContainer.insertAdjacentHTML('beforeend', html);
//         countriesContainer.style.opacity = 1;
//     });
// };
// getCountryData('portugal');
// getCountryData('usa');
// getCountryData('germany');


/*
const getNeighbourCountry = function (country) {
const request = new XMLHttpRequest();
request.open('GET', `https://restcountries.com/v2/name/${country}`);
request.send();
// console.log(request.responseText);
request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    renderData(data);

    // Neighbour country
    const neighbour = data.borders?.[0];
    if (!neighbour) return;
    console.log(neighbour);
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();
    request2.addEventListener('load', function () {
        const data2 = JSON.parse(request2.responseText);
        console.log(data2);
        renderData(data2, 'neighbour');
    });
});
};
getNeighbourCountry('usa');

setTimeout(() => {
console.log('1 second passed');
setTimeout(() => {
    console.log('2 second passed')
    setTimeout(() => {
        console.log('3 second passed')
        setTimeout(() => {
            console.log('4 second passed')
        }, 1000)
    }, 1000)
}, 1000)
}, 1000)

*/

// const dataApi = fetch(' https://restcountries.com/v2/name/portugal');
// console.log(dataApi)



// samething using promises

// const getCountryDate = function (country) {
//     const dataApi = fetch(`https://restcountries.com/v2/name/${country}/`)
//         .then(function (response) {
//             console.log(response);
//             return response.json();
//         }).then(function (data) {
//             console.log(data);
//             renderData(data[0]);
//         })
// }
// getCountryDate('portugal');



// const getCountryDate = function (country) {
//     const dataApi = fetch(`https://restcountries.com/v2/name/${country}/`)
//         .then((response) => {
//             console.log('resss', response);
//             if (!response.ok)
//                 throw new Error(`country not found (${response.status})`);
//             return response.json();
//         })
//         .then((data) => {
//             renderData(data[0])
//             // const neighbour = data[0].borders?.[0];
//             const neighbour = 'asck jca j';
//             return fetch(`https://restcountries.com/v2/alpha/${neighbour}`)
//         }).then(response => {
//             console.log('resss', response);
//             if (!response.ok)
//                 throw new Error(`country not found (${response.status})`);
//             return response.json();
//         })
//         .then(data => renderData(data, 'neighbour'))
//         .catch(err => {
//             console.error(`${err} 😂😂😂😂`)
//             renderError(`Something went wrong ${err.message}😂😂😂😂.
//                  Try again`);
//         })
//         .finally(() => {
//             countriesContainer.style.opacity = 1;
//         })
// }
/*
const getJSON = function (url, errorMsg = '') {
    return fetch(url).then((response) => {
        if (!response.ok)
            throw new Error(`country not found (${response.status}) ${errorMsg}`);
        return response.json();
    })
}


const getCountryDate = function (country) {
    getJSON(`https://restcountries.com/v2/name/${country}/`,
        'Country Not Found')
        .then(data => {
            renderData(data[0])
            const neighbour = data[0].borders?.[0];
            if (!neighbour) throw new Error('No Neighbour')
            return getJSON(`https://restcountries.com/v2/alpha/${neighbour}`,
                'Country not found'
            );
        })
        .then(data => renderData(data, 'neighbour'))
        .catch(err => {
            console.error(`${err} 😂😂😂😂`)
            renderError(`Something went wrong ${err.message}😂😂😂😂.
                 Try again`);
        })
        .finally(() => {
            countriesContainer.style.opacity = 1;
        })
}

*/
/*
const btn = document.querySelector('.btn-country');

btn.addEventListener('click', function () {
    getCountryDate('portugal');
})
*/
// getCountryDate('australia');
/*
console.log('Test Start');
setTimeout(() => console.log('seted time After 0 secs'), 500);
Promise.resolve('resolved Promise 1').then((res) =>
    console.log(res));
Promise.resolve('Resolved promise 2').then(res => {
    for (let i = 0; i < 100000000; i++) { }
    console.log(res);
})
console.log('Test End');
*/
/*
const lotteryTicket = new Promise(function (resolve, reject) {
    console.log('Lottery Draw was being happening 🔮🔮')
    setTimeout(function () {
        if (Math.random() >= 0.5) {
            resolve('You won the lottery Ticket 🎶👍😍👌');
        } else {
            reject(new Error('You lost the lottery ticket'));
        }
    }, 2000)

})
lotteryTicket.then((res) => console.log(res)).catch
    ((err) => console.error(err));



const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    })
}
wait(2).then(() => {
    console.log('1 second passed');
    return wait(1);
}).then(() => {
    console.log('2 second passed');
    return wait(2);
}).then(() => {
    console.log('3 second passed');
    return wait(3);
}).then(() => {
    console.log('4 second passed');
    return wait(4);
}).then(() => {
    console.log('5 second passed');
    return wait(5);
})


Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('abc')).then(x => console.error(x));

// setTimeout(() => {
// console.log('1 second passed');
// setTimeout(() => {
//     console.log('2 second passed')
//     setTimeout(() => {
//         console.log('3 second passed')
//         setTimeout(() => {
//             console.log('4 second passed')
//         }, 1000)
//     }, 1000)
// }, 1000)
// }, 1000)

*/

/*

const getPosition = function () {
    return new Promise(function (resolve, reject) {
        // navigator.geolocation.getCurrentPosition(
        //     position => console.log(position)
        //     , error => console.log(error));
        navigator.geolocation.getCurrentPosition(resolve, reject);
    })
}

// getPosition().then(pos => console.log(pos));



const whereAmI = function () {

    getPosition().then(
        pos => {
            const { latitude:lat,  longitude:lng } = pos.coords;
            return fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`)
        })
        .then(response => {
            if (!response.ok) throw new Error(`Problem with geoCoding ${response.status}`)
            console.log(response);
            return response.json()
        })
        .then(data => {
            console.log(data);
            console.log(`You are in ${data.city}, ${data.countryCode}`)
            return fetch(`https://restcountries.com/v2/name/${data.countryName}/`);
        })
        .then(res => {
            if (!res.ok) throw new Error(`country Not found ${res.status}`);
            return res.json();
        })
        .then(data => renderData(data[0]))
        .catch(err => console.error(`${err.message} 😢❤️`))

}
whereAmI(52.508, 13.381);


const btn = document.querySelector('.btn-country');
btn.addEventListener('click', whereAmI)


*/

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Async and await
/*
const whereAmI = async function (country) {
    // fetch(`https://restcountries.com/v2/name/${country}`).then((res) => console.log(res));

    const res = await fetch(`https://restcountries.com/v2/name/${country}`);
    console.log(res);
    const data = await res.json();
    console.log(data);
    renderData(data[0]);
}
whereAmI('portugal');
console.log('FIrsT');
*/

//--------------------------------------------------------------------------------------------------------------------------------------------------

const get3Countries = async function (c1, c2, c3) {
    try {
        // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
        // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
        // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);
        // console.log([data1.capital, data2.capital, data3.capital]);


        const data = await Promise.all([
            getJSON(`https://restcountries.com/v2/name/${c1}`),
            getJSON(`https://restcountries.com/v2/name/${c2}`),
            getJSON(`https://restcountries.com/v2/name/${c3}`)
        ])
        console.log(data.map((d) => d[0].capital));
    } catch (err) {
        console.error(err);
    }
}
get3Countries('portugal', 'canada', 'tanzania');



//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// promise combinators

(async function () {
    const res = await Promise.race([
        getJSON(`https://restcountries.com/v2/name/italy`),
        getJSON(`https://restcountries.com/v2/name/egypt`),
        getJSON(`https://restcountries.com/v2/name/mexico`)
    ])
    console.log(res[0]);
})();



const timeOut = function (sec) {
    return new Promise(function (_, reject) {
        setTimeout(() => {
            reject(new Error('Request took so long'));
        }, sec);
    })
}

//promise.race
Promise.race([
    getJSON(`https://restcountries.com/v2/name/china`),
    timeOut(0.5)
])
    .then(res => console.log(res[0]))
    .catch(err => console.log(err));


//promise.allSettled
Promise.allSettled([
    Promise.resolve('Success'),
    Promise.reject('Error'),
    Promise.resolve('Another resolve')
]).then(res => console.log(res)).catch((err) => console.log(err))




//promise.any - >rejected promisses are removed and first success promise works properly
Promise.any([
    Promise.resolve('Success'),
    Promise.reject('Error'),
    Promise.resolve('Another resolve')
]).then(res => console.log(res)).catch((err) => console.log(err))
















































//Lecture (Theory)
// Asyncronous programming 
/*
Asyncronous programming is all about co-ordinationg the behaviour of the program for the certain amount of time
setTimeout() -> works in Asyncronous way and
-> callback function alone does not allows the code asyncronous 
-> Event Listners alone does not allows the code asyncronous 

// What is AJAX
Asyncronous  JAvascript And XML 
XML is a data format which is used to be widely used to transmit data on the web
but now we use the JSON format
*/


