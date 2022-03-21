const operation = require('./operations');
const Questions = require('./questions');

const BinaryMultipleChoiceUniformDigit = (digits, f, e, type, isdivision=false) => {
	return () => {
		const op = operation(type, f,e);
		const q = Questions.Question.BinaryArithmatic(op, isdivision);
		const a = Questions.Answer.MultipleChoice();
		const n = Questions.Difficulty.Digits(digits);

		return Questions.generateQuestion(q, a, n);
	}
}
const BinaryOpenAnswerUniformDigit = (digits, f, e, type, isdivision=false) => {
	return () => {
		const op = operation(type, f,e);
		const q = Questions.Question.BinaryArithmatic(op, isdivision);
		const a = Questions.Answer.OpenAnswer();
		const n = Questions.Difficulty.Digits(digits);

		return Questions.generateQuestion(q, a, n);
	}
}

const BinaryMultipleChoiceUniformDigitAddition = (digits) => BinaryMultipleChoiceUniformDigit(digits, (a,b)=>a+b,(a,b)=>`what is ${a} ➕ ${b}`, 'addition')
const BinaryMultipleChoiceUniformDigitSubtraction = (digits) => BinaryMultipleChoiceUniformDigit(digits, (a,b)=>a-b,(a,b)=>`what is ${a} ➖ ${b}`,
'subtraction')
const BinaryMultipleChoiceUniformDigitMultiplication = (digits) => BinaryMultipleChoiceUniformDigit(digits, (a,b)=>a*b,(a,b)=>`what is ${a} ✖️ ${b}`,
'multiplication')
const BinaryMultipleChoiceUniformDigitDivision = (digits) => BinaryMultipleChoiceUniformDigit(digits, (a,b)=>a/b,(a,b)=>`what is ${a} ➗ ${b}`,
'division', true)
const BinaryOpenAnswerUniformDigitAddition = (digits) => BinaryOpenAnswerUniformDigit(digits, (a,b)=>a+b,(a,b)=>`what is ${a} ➕ ${b}`, 'addition')
const BinaryOpenAnswerUniformDigitSubtraction = (digits) => BinaryOpenAnswerUniformDigit(digits, (a,b)=>a-b,(a,b)=>`what is ${a} ➖ ${b}`,
'subtraction')
const BinaryOpenAnswerUniformDigitMultiplication = (digits) => BinaryOpenAnswerUniformDigit(digits, (a,b)=>a*b,(a,b)=>`what is ${a} ✖️ ${b}`,
'multiplication')
const BinaryOpenAnswerUniformDigitDivision = (digits) => BinaryOpenAnswerUniformDigit(digits, (a,b)=>a/b,(a,b)=>`what is ${a} ➗ ${b}`,
'division', true)



module.exports = {BinaryMultipleChoiceUniformDigitAddition, BinaryMultipleChoiceUniformDigitSubtraction, BinaryMultipleChoiceUniformDigitMultiplication,BinaryMultipleChoiceUniformDigitDivision,BinaryOpenAnswerUniformDigitAddition, BinaryOpenAnswerUniformDigitSubtraction, BinaryOpenAnswerUniformDigitMultiplication,BinaryOpenAnswerUniformDigitDivision}