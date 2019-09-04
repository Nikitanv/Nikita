'use strict';

let money,
    expenses1,
    expenses2,
    cashIncome,
    start = function () {
        do {
            money = +prompt('ваш месячный доход?', 15000);
        }
        while (isNaN(money) || money === '' || money === null);
    };
start();

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 200000,
    period: 3,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    ExpensesMonth: 0,
    asking: function () {

        if (confirm('Есть ли у вас дополнительный заработок?')) {
            let itemIncome = prompt('Какой у вас дополнительны зарабаток ?', 'Куратор');
            do {
                cashIncome = prompt('Сколько в месяц вы на этом зарабатываете ?', 10000);
            }
            while (isNaN(cashIncome) || cashIncome === '' || cashIncome === null);

            appData.income[itemIncome] = cashIncome;
        }

        let addExpenses = prompt('Перечислите Возможные Расходы За Зассчитываемый Период Через Запятую');
        appData.addExpenses = addExpenses.toLowerCase ().split(',');
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
    getExpensesMounth: function () {
        for (let key in appData.expenses) {
            appData.ExpensesMonth += +appData.expenses[key];
        }
    },
    getBudget: function () {
        appData.budgetMonth = appData.budget - appData.ExpensesMonth;
        appData.budgetDay = Math.ceil(appData.budgetMonth / 30);
    },
    getTargetMonth: function () {
        let countMonth = Math.ceil(appData.mission / appData.budgetMonth);
        if (countMonth > 0) {
            return ('Цель будет достигнута за ', countMonth);
        } else {
            return ('цель не будет достигнута');
        }
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
    calcSavedMoney: function () {
        return appData.budgetMonth * appData.period;
    },
    getInfoDeposit: function () {
        if (appData.deposit) {
            appData.percentDeposit = prompt('Какой годовой процент?', '10');
            do {
                appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
            }
            while (isNaN(appData.moneyDeposit) || appData.moneyDeposit === '' || appData.moneyDeposit === null);
            

        }
    }, 
};

appData.asking();
appData.getBudget();
console.log(appData.getTargetMonth());
appData.getExpensesMounth();
console.log(appData.budgetMonth);
console.log(appData.getStatusIncome());
appData.getInfoDeposit();
console.log('расходы за месяц = ', expenses2);
for (let key in appData) {
    console.log('Наша программа включает в себя данные = ' + key + '-' + appData[key]);
}