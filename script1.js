'use strict';


let money = +prompt('ваш месячный доход?');
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');
let income = ' Фриланс ';
let mission = 20000;
let tallage
let allExpenses
let budgetMonth = (money - allExpenses);
let budgetDay =  (budgetMonth / 30);
let tallage1
let allExpenses1


let start = function(){
money = prompt('ваш месячный доход?', 15000);

while(isNaN(money) || money === '' || money === null){
money = prompt('ваш месячный доход?', 15000);
console.log ('money=',money);

}



};




let getExpensesMonth = function(){
    let sum = 0;
    for (let i = 0; i<2;i++){
if (i === 0){
    expenses1 = promt('Какие обязательные ежемесячные расходы у вас есть?', 'Налоги');
}
if (i === 1){
    expenses2 = promt('Какие обязательные ежемесячные расходы у вас есть?', 'Долги');
}
sum +=+prompt('Во сколько это обойдется?', 5000);
    }
return sum;
};

console.log(getExpensesMonth());



let getAccumulatedMonth = function(){
return money - getExpensesMonth();
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

if (res < 0) console.log('Цель не будет достигнута');
else console.log('Цель будет достигнута');


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
else if (budgetDay<0 ) return('Что-то пошло не так');
};

getStatusIncome();






