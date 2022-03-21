const randomNumberChoice = (from, to) => {
	const diff = to - from

	return from + Math.floor(diff * Math.random())
}
const Shuffle = (array) => {
	let A = array.slice()
	const S = A
	.map(x=>({value:x,sort:Math.random()}))
	.sort((a,b)=>a.sort-b.sort)
	.map(({value})=>value)
	return S;
}

Shuffle([1,2,3,4,5,6,7,8,9,0]);

module.exports = {randomNumberChoice, Shuffle}