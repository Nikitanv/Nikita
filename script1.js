'use strict';

let money,
    expenses1,
    expenses2,
    budgetMonth,
      start = function () {
    do {
        money = +prompt('ваш месячный доход?', 15000);
    }
    while (isNaN(money) || money === '' || money === null);
};
start();
console.log(money);
 


let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 200000,
    period: 3,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    ExpensesMonth: 0,
    asking: function () {
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        appData.addExpenses = addExpenses.toLowerCase().split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        for (let i = 0; i < 2; i++) {

            expenses1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Налоги');

            do {
                expenses2 = +prompt('Во сколько это обойдется?', 5000);
            }
            while (isNaN(expenses2) || expenses2 === '' || expenses2 === null);
        }
      appData.expenses[expenses1] = expenses2;
    },
getExpensesMounth:function(){
for (let key in appData.expenses){
    appData.ExpensesMonth += +appData.expenses[key];
}
},
    getBudget: function () {
        budgetMonth = appData.budget - appData.ExpensesMonth;
        appData.budgetDay = Math.ceil(budgetMonth / 30);
    },





    getTargetMonth: function () {

        return appData.mission / budgetMonth;
    },


    getStatusIncome: function () {
        if (appData.budgetDay >= 800) {
            return ('Высокий уровень дохода');
        } else if (appData.budgetDay >= 300) {
            return ('Средний уровень дохода');
        } else if (appData.budgetDay < 300) {
            return ('Низкий уровень дохода');
        } else {
            return ('Что-то пошло не так');
        }
    },
};


appData.asking();
appData.getBudget();
appData.getTargetMonth();








if (appData.getTargetMonth() > 0) {
    console.log('Цель будет достигнута за ', Math.ceil(appData.getTargetMonth()));
} else {
    console.log('цель не будет достигнута');
}



console.log(appData.getStatusIncome());
console.log('расходы за месяц = ', expenses2);
for (let key in appData){
console.log('Наша программа включает в себя данные = ' + key + '-'+ appData[key]);
}