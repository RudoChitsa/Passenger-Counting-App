

let countAll = document.getElementById("count-el")


let count = 0

function increment() {
	count = count + 1
	countAll.innerText = count
	console.log(count)
}