let isGuestOneVegan = false
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
	console.log('Two vegan menus.')
} else if (isGuestOneVegan || isGuestTwoVegan) {
	console.log('One vegan menu, one regular menu.')
} else {
	console.log('Two regular menus.')
}

let getTip = function (total = 20) {
	return `For a bill of $${total}, your tip should be ${total * .15}`
}

console.log(getTip(30))