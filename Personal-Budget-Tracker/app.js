// Variables for DOM elements
const balanceEl = document.getElementById('balance');
const incomeEl = document.getElementById('income-amount');
const expenseEl = document.getElementById('expense-amount');
const transactionListEl = document.getElementById('transaction-list');
const formEl = document.getElementById('transaction-form');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const typeInput = document.getElementById('type');

// Track transactions
let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

// Update balance, income, and expense
function updateTotals() {
    const amounts = transactions.map(transaction => transaction.amount);
    const totalIncome = amounts.filter(amount => amount > 0).reduce((a, b) => a + b, 0);
    const totalExpenses = amounts.filter(amount => amount < 0).reduce((a, b) => a + b, 0);
    const balance = totalIncome + totalExpenses;

    balanceEl.textContent = balance.toFixed(2);
    incomeEl.textContent = totalIncome.toFixed(2);
    expenseEl.textContent = Math.abs(totalExpenses).toFixed(2);
}

// Add a transaction to the list
function addTransactionDOM(transaction) {
    const li = document.createElement('li');
    li.classList.add(transaction.amount < 0 ? 'expense' : 'income');
    li.innerHTML = `
        ${transaction.description} <span>${transaction.amount < 0 ? '-' : '+'}$${Math.abs(transaction.amount)}</span>
    `;
    transactionListEl.appendChild(li);
}

// Handle form submission
formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const description = descriptionInput.value;
    const amount = parseFloat(amountInput.value);
    const type = typeInput.value;

    if (description && amount) {
        const transaction = {
            description,
            amount: type === 'income' ? amount : -amount
        };

        transactions.push(transaction);
        addTransactionDOM(transaction);
        updateTotals();
        localStorage.setItem('transactions', JSON.stringify(transactions));
        
        descriptionInput.value = '';
        amountInput.value = '';
    }
});

// Initialize the app
function init() {
    transactionListEl.innerHTML = '';
    transactions.forEach(addTransactionDOM);
    updateTotals();
}

init();
