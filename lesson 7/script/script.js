let start = document.getElementById('start'),
button = document.getElementsByTagName('button'),
incomepl = button[0] ,
expensespl = button[1],
additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
additionalExpensesItem = document.querySelector('.additional_expenses-item'),
targetValue = document.querySelector('.target-amount'),
depositCheck = document.querySelector('#deposit-check'),
budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
budgetMounthValue = document.getElementsByClassName('budget_mounth-value')[0],
expensesMounthValue = document.getElementsByClassName('expenses_mounth-value')[0],
additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
additionalMounthValue = document.getElementsByClassName('additional_mounth-value')[0],
incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
targetMounthValue = document.getElementsByClassName('target_mounth-value'),
salaryAmount = document.querySelector('.salary-amount'),
incomeTitle = document.querySelector('.income-title'),
incomeAmount = document.querySelector('.income-amount'),
expensesTitle = document.querySelector('.expenses-title'),
additionalExpenses = document.querySelector('.additional_expenses'),
periodSelector = document.querySelector('.period-select'),
expensesItem = document.querySelectorAll('.expenses-item'),
incomeItem = document.querySelectorAll('.income-item');