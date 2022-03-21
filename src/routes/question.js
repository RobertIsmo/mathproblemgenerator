const express = require('express');
const path = require('node:path');
const Generator = require('../core/generator');
const random = require('../lib/random');

const type2gen = {
	BinaryMultipleChoiceUniformDigit: {
		'addition':Generator.BinaryMultipleChoiceUniformDigitAddition,
		'subtraction':Generator.BinaryMultipleChoiceUniformDigitSubtraction,
		'multiplication':Generator.BinaryMultipleChoiceUniformDigitMultiplication,
		'division':Generator.BinaryMultipleChoiceUniformDigitDivision
	},
	BinaryOpenAnswerUniformDigit: {
		'addition':Generator.BinaryOpenAnswerUniformDigitAddition,
		'subtraction':Generator.BinaryOpenAnswerUniformDigitSubtraction,
		'multiplication':Generator.BinaryOpenAnswerUniformDigitMultiplication,
		'division':Generator.BinaryOpenAnswerUniformDigitDivision
	}
}

const router = express.Router();

//route for Uniform digit addition
router.get('/multi/:diff/:type/:amount', async (req, res) => {
	try {
		const digits = Math.min(parseInt(req.params.diff), 5)
		const amount = Math.min(parseInt(req.params.amount), 50)
		const data = Array(amount).fill().map(x=>type2gen.BinaryMultipleChoiceUniformDigit[req.params.type](digits)())

		res.json(data)
	} catch(e) {
		console.log(e)
		res.status(400).send("incorrect request")
	}
})
router.get('/open/:diff/:type/:amount', async (req, res) => {
	try {
		const digits = Math.min(parseInt(req.params.diff), 5)
		const amount = Math.min(parseInt(req.params.amount), 50)
		const data = Array(amount).fill().map(x=>type2gen.BinaryOpenAnswerUniformDigit[req.params.type](digits)())

		res.json(data)
	} catch(e) {
		console.log(e)
		res.status(400).send("incorrect request")
	}
})

router.get('/multi/any/:amount', async (req, res) => {
	try {
		
		const amount = Math.min(parseInt(req.params.amount), 50)
		const data = Array(amount).fill().map(x=>{
			const digits = random.randomNumberChoice(1,6);
			const keys = random.Shuffle(Object.keys(type2gen.BinaryMultipleChoiceUniformDigit));
			return type2gen.BinaryMultipleChoiceUniformDigit[keys[0]](digits)()
		})

		res.json(data)
	} catch(e) {
		console.log(e)
		res.status(400).send("incorrect request")
	}
})
router.get('/open/any/:amount', async (req, res) => {
	try {
		
		const amount = Math.min(parseInt(req.params.amount), 50)
		const data = Array(amount).fill().map(x=>{
			const digits = random.randomNumberChoice(1,6);
			const keys = random.Shuffle(Object.keys(type2gen.BinaryOpenAnswerUniformDigit));
			return type2gen.BinaryOpenAnswerUniformDigit[keys[0]](digits)()
		})

		res.json(data)
	} catch(e) {
		console.log(e)
		res.status(400).send("incorrect request")
	}
})
router.get('/', async (req, res) => {
	res.sendFile('question-docs.html', {root: path.join(__dirname, '../../documentation')})
})
router.get('/docs', async (req, res) => {
	res.sendFile('question-docs.html', {root: path.join(__dirname, '../../documentation')})
})
router.get('*', async (req, res) => {
	res.sendFile('question-docs.html', {root: path.join(__dirname, '../../documentation')})
})

module.exports = router