import './style.css'
import { sum } from './modules/utils.js'

let firstNum = document.querySelector(".first-num");
let secondNum = document.querySelector(".second-num");
let butPlus = document.querySelector(".sum");
let result = document.querySelector(".therd-num");



console.log(sum(butPlus, firstNum, secondNum, result));
