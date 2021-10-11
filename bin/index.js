#!/usr/bin/env node

let countryList = require('country-list');
let chalk = require('chalk');
let axios = require('axios').default;

let y = process.argv[2];
let country = countryList.getCode(y);
let year = '';

if (process.argv[3]) {
    year = process.argv[3];
    
    axios.get(`https://date.nager.at/api/v3/PublicHolidays/${year + '/' + country}`).then(resp => {
    
        let datas = resp.data;  
        datas.forEach(data => {
            console.log(chalk.yellow(data.date) + ' - ' + chalk.red(data.name)  + ' aka ' + chalk.blueBright(data.localName) );
        });
    });
} else{
    year = 2021;
    axios.get(`https://date.nager.at/api/v3/PublicHolidays/${year + '/' + country}`).then(resp => {
    
        let datas = resp.data;  
        datas.forEach(data => {
            console.log(chalk.yellow(data.date) + ' - ' + chalk.red(data.name)  + ' aka ' + chalk.blueBright(data.localName) );
        });
    });
}

