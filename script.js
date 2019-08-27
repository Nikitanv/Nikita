'use strict';


let Question = prompt('ваш месячный доход?');
let money = Question;

let Question2 = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let addExpenses = Question2;

let Question3 = confirm('Есть ли у вас депозит в банке?');
let deposit = Question3;

let income = ' Фриланс ';

let mission = 2000000;

let Question4 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let tallage  = Question4;

let Question5 = prompt('Во сколько это обойдется?');
let allExpenses = Question5;

let budgetMonth = (money - tallage);

let budgetDay =  (budgetMonth / 30);



console.log('money = ', money);

console.log('addExpenses = ',addExpenses);

console.log('income = ',income);

console.log('deposit = ',deposit);

console.log('budgetMonth = ', budgetMonth);

console.log(Math.round(mission/budgetMonth));

console.log(Math.round(budgetDay));

if (budgetDay >800 ) console.log('Высокий уровень дохода');
else if (budgetDay >=300 <= 800) console.log('Средний уровень дохода');
else if (budgetDay >=0 < 300 ) console.log('Низкий уровень дохода');
else if (budgetDay<0 ) console.log('Что то пошло не так');
