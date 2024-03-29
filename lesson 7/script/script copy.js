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
    cancel = document.querySelector('#cancel'),
    depositBank = document.querySelector('.deposit-bank'),
    depositAmont = document.querySelector('.deposit-amount'),
    depositParcent = document.querySelector('.deposit-percent');
    // cls = document.querySelector('.calc'),
    //btn = document.getElementsByClassName('btn_plus');

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

        salaryAmount.addEventListener('input', function () {
            if (salaryAmount.value.trim() === '') {
                start.disabled = true;
            } else {
                start.disabled = false;
            }
        });
        this.budget = +salaryAmount.value;
        this.getEpenses();
        this.addBlock();
        this.getIncome();
        this.getExpensesMounth();
        // this.getAddExpenses();
        this.getInfoDeposit();
        // this.getAddincome();
        this.getAdd(additionalExpensesItem);
        this.getAdd(additionalIncomeItem);
        this.getBudget();
        this.showResult();
        this.block();
    },
    showResult: function () {
        budgetMounthValue.value = this.budgetMonth;
        budgetDayValue.value = Math.floor(this.budgetDay);
        expensesMounthValue.value = this.ExpensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(', ');
        targetMounthValue.value = Math.ceil(this.getTargetMonth());
        incomePeriodValue.value = this.calcSavedMoney();
        periodSelector.addEventListener('change', function () {
            incomePeriodValue.value = appData.calcSavedMoney();
        });

    },
    block: function () {
        data.querySelectorAll('input[type=text]').forEach(function (item) {
            item.disabled = true;
        });
        start.style.display = 'none';
        cancel.style.display = 'block';
        cancel.addEventListener('click', this.reset);
    },
    reset() {
        this.income = {};
        this.addIncome = [];
        this.expenses = {};
        this.addExpenses = [];
        this.deposit = false;
        this.percentDeposit = 0;
        this.moneyDeposit = 0;
        this.period = 3;
        this.budget = 0;
        this.budgetDay = 0;
        this.budgetMonth = 0;
        this.ExpensesMonth = 0;
        this.incomeMonth = 0;
        data.querySelectorAll('input[type=text]').forEach(function (item) {
            item.disabled = false;
        });
        data.querySelectorAll('input[type=text]').forEach(function (item) {
            item.value = '';
        });
        start.style.display = 'block';
        cancel.style.display = 'none';
    },
    //     addExpensesBlock: function () {
    //  let cloneExpensesItem = expensesItems[0].cloneNode(true);
    //         expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
    //         expensesItems = document.querySelectorAll('.expenses-items');
    //         if (expensesItems.length === 3) {
    //             expensesPlus.style.display = 'none';
    //         }
    //     },
    //     addIncomeBlock: function () {
    //         let cloneIncomeItem = incomeItem[0].cloneNode(true);
    //         cloneIncomeItem.querySelectorAll('input').forEach(function (item) {
    //             item.value = '';
    //         });
    //         incomeItem[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
    //         incomeItem = document.querySelectorAll('.income-items');
    //         if (incomeItem.length >= 3) {
    //             incomePlus.style.display = 'none';
    //         }
    //     },
    addBlock: function (elem, className, btn) {
        let cloneItem = elem[0].cloneNode(true);
        cloneItem.querySelectorAll('input').forEach(function (item) {
            item.value = '';
        });
        cloneItem.querySelectorAll('input').forEach(function () {
            elem[0].parentNode.insertBefore(cloneItem, btn);
            elem = document.querySelectorAll(className);
            if (elem.length >= 3) {
                btn.style.display = 'none';
            }
        });
    },

    getEpenses: function () {
        expensesItems.forEach(function (item) {
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if (itemExpenses !== '' && cashExpenses !== '') {
                this.expenses[itemExpenses] = cashExpenses;
            }
        }, this);
    },
    getIncome: function () {
        incomeItem.forEach(function (item) {
            let incomeTitle = item.querySelector('.income-title').value;
            let incomeAmount = item.querySelector('.income-amount').value;
            if (incomeTitle !== '' && incomeAmount !== '') {
                this.income[incomeTitle] = incomeAmount;
            }
        }, this);
        for (let key in this.income) {
            this.incomeMonth += +this.income[key];
        }
    },
    // getAddExpenses: function () {
    //     let addExpenses = additionalExpensesItem.value.split(',');
    //     addExpenses.forEach(function (item) {
    //         item = item.trim();
    //         if (item !== '') {
    //             this.addExpenses.push(item);
    //         }
    //     }, this);

    // },
    // getAddincome: function () {
    //     additionalIncomeItem.forEach(function (item) {
    //         let itemValue = item.value.trim();
    //         if (itemValue !== '') {
    //             this.addIncome.push(itemValue);
    //         }
    //     }, this);

    // },
    getAdd: function (adds) {
        let add = adds.value.split(',');
        add.forEach(function (item) {
            item = item.trim();
            if (item !== '') {
                this.add.push(item);
            }
        }, this);
    },

    getExpensesMounth: function () {
        for (let key in this.expenses) {
            this.ExpensesMonth += +this.expenses[key];
        }

    },

    getBudget: function () {
        this.budgetMonth = this.budget + this.incomeMonth - this.ExpensesMonth + (this.moneyDeposit * this.percentDeposit) / 12;
        appData.budgetDay = Math.ceil(this.budgetMonth / 30);
    },
    getTargetMonth: function () {
        return targetAmount.value / appData.budgetMonth;

    },
    getStatusIncome: function () {
        if (this.budgetDay >= 800) {
            return ('Высокий уровень дохода');
        } else if (this.budgetDay >= 300) {
            return ('Средний уровень дохода');
        } else if (this.budgetDay < 300) {
            return ('Низкий уровень дохода');
        } else {
            return ('Что-то пошло не так');
        }
    },
    calcSavedMoney: function () {
        return this.budgetMonth * periodSelector.value;
    },
    getInfoDeposit: function () {
        if (this.deposit) {
            this.percentDeposit = depositParcent.value;
            this.moneyDeposit = depositAmont.value;
        }
    },
};
start.addEventListener('click', appData.start.bind(appData));
//console.log(items);
//btn.addEventListener('click', appData.addBlock);

expensesPlus.addEventListener('click', function () {
    appData.addBlock(expensesItems, '.expenses-items', expensesPlus);
});
incomePlus.addEventListener('click', function () {
     console.log(this);
    appData.addBlock(incomeItem, '.income-items', incomePlus);
   
});
depositCheck.addEventListener('change', function () {
    if (depositCheck.checked === true) {
        depositBank.style.display = 'inline-block';
        depositAmont.style.display = 'inline-block';
        appData.deposit = 'true';
        depositBank.addEventListener('change', function () {
            let selectIndex = this.options[this.selectedIndex].value;
            if (selectIndex === 'other') {
                depositParcent.style.display = 'inline-block';
                depositParcent.value = '';
            } else {
                depositParcent.style.display = 'none';
                depositParcent.value = selectIndex;
            }
        });
    } else {
        depositBank.style.display = 'none';
        depositAmont.style.display = 'none';
        depositAmont.value = '';
        appData.deposit = 'false';

    }
});

periodSelector.addEventListener('input', function () {
    document.querySelector('.period-amount').textContent = periodSelector.value;
});

//start.disabled = true;












//console.log(appData.getTargetMonth());
//console.log(appData.addExpenses.map(function (item) {
//   return item[0].toUpperCase() + item.slice(1);
// }).join(', '));if (countMonth > 0) {
//     return ('Цель будет достигнута за ', countMonth);
// } else {
//     return ('цель не будет достигнута')