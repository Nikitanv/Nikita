'use strict';

let start = document.getElementById('start'),
    btnPlus = document.getElementsByTagName('button'),
    incomePlus = btnPlus[0],
    expensesPlus = btnPlus[1],
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    depositCheck = document.querySelector('#deposit-check'),
    budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
    budgetMounthValue = document.getElementsByClassName('budget_month-value')[0],
    expensesMounthValue = document.getElementsByClassName('expenses_month-value')[0],
    additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
    additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
    additionalMounthValue = document.getElementsByClassName('additional_month-value')[0],
    incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
    targetMounthValue = document.getElementsByClassName('target_month-value'),
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    incomeAmount = document.querySelector('.income-amount'),
    expensesTitle = document.querySelector('.expenses-title'),
    additionalExpenses = document.querySelector('.additional_expenses'),
    periodSelector = document.querySelector('.period-select'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    incomeItem = document.querySelectorAll('.income-items'),
    data = document.querySelector('.data'),
    cancel = document.querySelector('#cancel');
    

let
    expenses1,
    expenses2,
    cashIncome,
    itemIncome;

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    period: 3,
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    ExpensesMonth: 0,
    incomeMonth: 0,
    start: function () {
        // if (salaryAmount.value === '') {
        //     alert('Ошибка, поле "Месячный доход" должно быть заполнено');
        // }
        appData.budget = +salaryAmount.value;

        appData.getEpenses();
        appData.getIncome();
        appData.getExpensesMounth();
        appData.getAddExpenses();
        appData.getAddincome();
        appData.getBudget();
        appData.showResult();
        appData.block();
    },
    showResult: function () {
        budgetMounthValue.value = appData.budgetMonth;
        budgetDayValue.value = Math.floor(appData.budgetDay);
        expensesMounthValue.value = appData.ExpensesMonth;
        additionalExpensesValue.value = appData.addExpenses.join(', ');
        additionalIncomeValue.value = appData.addIncome.join(', ');
        targetMounthValue.value = Math.ceil(appData.getTargetMonth());
        incomePeriodValue.value = appData.calcSavedMoney();

        periodSelector.addEventListener('change', function () {
            incomePeriodValue.value = appData.calcSavedMoney();
        });

    },
block: function(){
    data.querySelectorAll('input[type=text]').forEach(function(item){
        item.disabled = true;
    });
start.style.display = 'none';
cancel.style.display = 'block';
},
    addExpensesBlock: function () {


        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items');
        if (expensesItems.length === 3) {
            expensesPlus.style.display = 'none';
        }
    },
    addIncomeBlock: function () {
        let cloneIncomeItem = incomeItem[0].cloneNode(true);
        cloneIncomeItem.querySelectorAll('input').forEach(function (item) {
            item.value = '';
        });
        incomeItem[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
        incomeItem = document.querySelectorAll('.income-items');
        if (incomeItem.length >= 3) {
            incomePlus.style.display = 'none';

        }
    },
    getEpenses: function () {
        expensesItems.forEach(function (item) {
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if (itemExpenses !== '' && cashExpenses !== '') {
                appData.expenses[itemExpenses] = cashExpenses;
            }
        });
    },
    getIncome: function () {
        incomeItem.forEach(function (item) {
            let incomeTitle = item.querySelector('.income-title').value;
            let incomeAmount = item.querySelector('.income-amount').value;
            if (incomeTitle !== '' && incomeAmount !== '') {
                appData.income[incomeTitle] = incomeAmount;
            }
        });
        for (let key in appData.income) {
            appData.incomeMonth += +appData.income[key];
        }
    },
    getAddExpenses: function () {
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function (item) {
            item = item.trim();
            if (item !== '') {
                appData.addExpenses.push(item);
            }
        });
    },
    getAddincome: function () {
        additionalIncomeItem.forEach(function (item) {
            let itemValue = item.value.trim();
            if (itemValue !== '') {
                appData.addIncome.push(itemValue);
            }
        });
    },


    getExpensesMounth: function () {
        for (let key in appData.expenses) {
            appData.ExpensesMonth += +appData.expenses[key];
        }
    },

    getBudget: function () {
        appData.budgetMonth = appData.budget + appData.incomeMonth - appData.ExpensesMonth;
        appData.budgetDay = Math.ceil(appData.budgetMonth / 30);
    },
    getTargetMonth: function () {
        return targetAmount.value / appData.budgetMonth;

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
        return appData.budgetMonth * periodSelector.value;
    },
    getInfoDeposit: function () {
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        if (appData.deposit) {
            appData.percentDeposit = prompt('Какой годовой процент?', '10');
            do {
                appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
            }
            while (isNaN(appData.moneyDeposit) || appData.moneyDeposit === '' || appData.moneyDeposit === null);


        }
    },
};
start.addEventListener('click', appData.start);

expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);

periodSelector.addEventListener('input', function () {
    document.querySelector('.period-amount').textContent = periodSelector.value;
});

start.disabled = true;

salaryAmount.addEventListener('input', function () {
    if (salaryAmount.value.trim() === '') {
        start.disabled = true;
    } else {
        start.disabled = false;
    }
});


















//console.log(appData.getTargetMonth());
//console.log(appData.addExpenses.map(function (item) {
//   return item[0].toUpperCase() + item.slice(1);
// }).join(', '));if (countMonth > 0) {
//     return ('Цель будет достигнута за ', countMonth);
// } else {
//     return ('цель не будет достигнута')