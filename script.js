 'use strict';


let money = prompt('ваш месячный доход?');

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');


let deposit = confirm('Есть ли у вас депозит в банке?');

let income = ' Фриланс ';

let mission = 2000000;

let tallage  = prompt('Какие обязательные ежемесячные расходы у вас есть?');

let allExpenses = prompt('Во сколько это обойдется?');

let budgetMonth = (money - tallage);

let budgetDay =  (budgetMonth / 30);



console.log('money = ', money);

console.log('addExprenses = ', String(addExpenses));

console.log('income = ',income);

console.log('deposit = ',deposit);

console.log('budgetMonth = ', budgetMonth);

console.log(Math.ceil(mission/budgetMonth));

console.log(Math.floor(budgetDay));

if (budgetDay >800 ) console.log('Высокий уровень дохода');
else if (budgetDay >=300 <= 800) console.log('Средний уровень дохода');
else if (budgetDay >=0 < 300 ) console.log('Низкий уровень дохода');
else if (budgetDay<0 ) console.log('Что-то пошло не так');
