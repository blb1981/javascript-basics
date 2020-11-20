let account = {
	name: 'Billy Bob',
	expenses: 0,
	income: 0
}

let addExpense = function (account, amount) {
	account.expenses = account.expenses + amount
}

let addIncome = function (account, income) {
	account.income = account.income + income
}

let resetAccount = function (account) {
	account.expenses = 0
	account.income = 0
}

let getAccountSummary = function (account) {
	let balance = account.income - account.expenses
	console.log(`${account.name} Account - $${account.income} income - $${account.expenses} expenses.`)
	console.log(`Balance - $${balance}`)
}

getAccountSummary(account)
addIncome(account, 10000)
addIncome(account, 7564)
addExpense(account, 1234)
addExpense(account, 159)
getAccountSummary(account)
resetAccount(account)
getAccountSummary(account)
