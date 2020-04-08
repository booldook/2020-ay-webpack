import './index.css';
// const { sum, sub } = require('./math.js');
import { sum, sub } from './math.js';

import flight from './img/flight.png';

console.log(sum(10, 20));
console.log(sub(10, 20));

document.addEventListener('DOMContentLoaded', () => {
	document.querySelector(".sample").innerHTML = `<img src="${flight}">&nbsp;` + document.querySelector(".sample").innerHTML ;
})