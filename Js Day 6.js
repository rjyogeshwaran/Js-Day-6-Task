//JS Day 6 Tasks.


//XMLHttpRequest object
//new keyword
//creating an XHR object
// send request

var request = new XMLHttpRequest();
// console.log(request);
//open a connection
request.open('GET', 'https://restcountries.com/v3.1/all');
//sending a connection
request.send();
//page load
request.onload = function () {
    // console.log("Page loaded")
    var data = JSON.parse(request.response)
    console.log(data[0]);

    //1. Get all the countries from Asia continent /region using Filter function.

    let res = data.filter(element => element.region == 'Asia');
    console.log(res);

    //2. Get all the countries with a population of less than 2 lakhs using Filter function.

    let pop = data.filter(element => element.population < 200000)
    console.log(pop);

    //3. Print the following details name, capital, flag using forEach function.

    let str = data.forEach(element => {
        console.log(element.name), console.log(element.capital), console.log(element.flag)
    });

    //4. Print the total population of countries using reduce function.

    let totalPop = data.reduce((acc, curr) => acc + curr.population, 0);

    console.log(totalPop);

    //5. Print the country which uses US Dollars as currency.

    let ame = data.filter(element => element.continents == 'North America')
    console.log(ame);
    let usd = [];
    data.map(element => {
        if (element.currencies) {
            let x = Object.keys(element.currencies);

            if (x.includes('USD')) {
                usd.push(element);
            }
        }
    })
    console.log(usd);
}