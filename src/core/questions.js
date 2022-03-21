const random = require('../lib/random');

// define the question type
const BinaryArithmatic = (operation, isdivision = false) => {
	return {
		weight: 2,
		template: (array) => {
			if(isdivision) {
				array[1] = array[1] === 0 ? 3 : array[1]
				const top = array[0] * array[1]
				return {
					expression: operation.expression(top, array[1]),
					answer: array[0],
					type: 'binary',
					optype: operation.type,
					detail: {
						a:top,
						b:array[1]
					}
				}
			}
			return {
				expression: operation.expression(array[0], array[1]),
				answer: operation.f(array[0], array[1]),
				type: 'binary',
				optype: operation.type,
				detail: {
					a:array[0],
					b:array[1]
				}
			}
		},
		op: (a)=>operation.f(a[0], a[1]),
	}
}

// define the answer type
const OpenAnswer = () => {
	return {
		type: 'open',
		weight: 0,
		template: () => [],
	}
}
const MultipleChoice = (amount = 4) => {
	return {
		type: 'multiple',
		weight: amount,
		template: (array) => {
			console.assert(array.length === amount);
			return random.Shuffle(array);
		}
	}
}

// set the difficulty
const Digits = (amount) => {
	const lower = (amount === 1) ? 0 : 10**(amount-1)
	const upper = (amount === 1) ? 10 : lower*10
	return () => random.randomNumberChoice(lower, upper);
}

// propogate the random values
const generateQuestion = (questiontemplate, answertemplate, difficultygenerator) => {
	const questionweight = questiontemplate.weight;
	const questionvalues = Array(questionweight).fill().map(x => difficultygenerator())
	
	const question = questiontemplate.template(questionvalues);

	const answerweight = answertemplate.weight;
	const answerchoices = answerweight===0?[]:[question.answer,...Array(answerweight - 1).fill().map(x => {
		let fakequestionvalues = Array(questionweight).fill().map(x => difficultygenerator())
		let fakeanswer = questiontemplate.template(fakequestionvalues).answer;
		while(fakeanswer === question.answer) {
			fakequestionvalues = Array(questionweight).fill().map(x => difficultygenerator())
			fakeanswer = questiontemplate.template(fakequestionvalues).answer;
		}
		return fakeanswer
	})]

	const answers = answertemplate.template(answerchoices)

	return {
		question,
		answers
	}

}

module.exports = {
	Question: {
		BinaryArithmatic
	},
	Answer: {
		OpenAnswer,
		MultipleChoice
	},
	Difficulty: {
		Digits
	},
	generateQuestion
};