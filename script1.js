'use strict';


let money = +prompt('ваш месячный доход?');
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');
let income = ' Фриланс ';
let mission = 20000;
let tallage  = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let allExpenses = +prompt('Во сколько это обойдется?');
let budgetMonth = (money - allExpenses);
let budgetDay =  (budgetMonth / 30);
let tallage1  = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let allExpenses1 = +prompt('Во сколько это обойдется?');

let getExpensesMonth = function(){
return allExpenses + allExpenses1;
};

let cum = getExpensesMonth();
console.log(cum);

const getAccumulatedMonth = function(){
return money - cum;
};
let accumulatedMonth = getAccumulatedMonth();
console.log(accumulatedMonth);

let getTargetMonth = function(){
    console.log(mission);
    console.log(accumulatedMonth);
    return (mission - accumulatedMonth);
};
let res = getTargetMonth();
console.log (res);


let showTypeOf = function(data) {
console.log(data, typeof(data));
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);


let getStatusIncome = function(){
if (budgetDay >=800 ) return('Высокий уровень дохода');
else if (budgetDay >=300 ) return('Средний уровень дохода');
else if (budgetDay  < 300 ) return('Низкий уровень дохода');
else if (budgetDay<=0 ) return('Что-то пошло не так');
};

getStatusIncome();






