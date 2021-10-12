#!/usr/bin/env node

import countryList from 'country-list';
import axios from 'axios';
import chalk from 'chalk'; 
import ora from 'ora';

let country = countryList.getCode(process.argv[2]);
let year = process.argv[3] || new Date().getFullYear();
let spinner = ora('Fetching Data').start();

let displayAPI = () => {
    axios.get(`https://date.nager.at/api/v3/PublicHolidays/${year + '/' + country}`).then(resp => {
        if(resp.status === 200){
            spinner.succeed('Data fetched !');
            let datas = resp.data;  
            
            datas.forEach(data => {
                console.log(chalk.yellowBright(data.date) + ': ' + chalk.italic.greenBright(data.name)  + ' - aka - ' + chalk.bold.blue(data.localName) );
            });
        };
    });
};

displayAPI();