document.getElementById('expense-form').addEventListener('submit', addExpense);

function addExpense(e) {
    e.preventDefault();

    const name = document.getElementById('expense-name').value;
    const amount = document.getElementById('expense-amount').value;

    if (name && amount) {
        const expense = {
            name,
            amount: parseFloat(amount)
        };

        let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
        expenses.push(expense);
        localStorage.setItem('expenses', JSON.stringify(expenses));

        document.getElementById('expense-form').reset();
        displayExpenses();
    }
}

function displayExpenses() {
    const expenseList = document.getElementById('expense-list');
    expenseList.innerHTML = '';

    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    let totalAmount = 0;

    expenses.forEach(expense => {
        const li = document.createElement('li');
        li.textContent = `${expense.name}: $${expense.amount}`;
        expenseList.appendChild(li);
        totalAmount += expense.amount;
    });

    document.getElementById('total-amount').textContent = totalAmount.toFixed(2);
}

document.addEventListener('DOMContentLoaded', displayExpenses);
   