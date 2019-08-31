 'use strict ';
 
  let money ;
let start = function(){
 money = prompt('ваш месячный доход?', 15000);
 
 while(isNaN(money) || money === '' || money === null){
 money = prompt('ваш месячный доход?', 15000);
 console.log ('money=',money);
 
 }
 
 };
start();
 

 let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
 let deposit = confirm('Есть ли у вас депозит в банке?');
 let income = ' Фриланс ';
 let mission = 20000;
 let tallage;
let expenses1;
 let expenses2;
 
 
 
 

 
 let getExpensesMonth = function(){
     let sum = 0;
     for (let i = 0; i < 2; i++){
 if (i === 0){
     expenses1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Налоги');
 }
 if (i === 1){
     expenses2 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Долги');
 }
 sum +=+prompt('Во сколько это обойдется?', 5000);
 while(isNaN(sum) || money === '' || money === null){
    sum =+prompt('Во сколько это обойдется?', 5000);
 }
     }
 return sum;
 };
  let expensesAmount = getExpensesMonth();

 console.log(expensesAmount);
 

 let budgetMonth = (money - expensesAmount);
 let budgetDay =  (budgetMonth / 30);
 let tallage1
 
 
 let getAccumulatedMonth = function(){
 return money - getExpensesMonth();
 };
 let accumulatedMonth = getAccumulatedMonth();
 console.log(accumulatedMonth);
 
 
 
 let getTargetMonth = function(){
     return (mission - accumulatedMonth);
 };
 
 if (getTargetMounth() > 0) console.log('Цель будет достигнута');
 else console.log('Цель не будет достигнута');
 
 
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
 
