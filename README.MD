go to [http://math.robertismo.com/v1/docs](http://math.robertismo.com/v1/docs) for documentation

responses are in the form:
	ARRAY [
		question:
			expression: STRING, *the question as a word problem*
			answer: NUMBER, *the answer to the question*
			type: STRING, *curently only responds with 'binary'*
			optype: STRING, *the operation type*
			detail:
				ARRAY [
					a: NUMBER, 
					b: NUMBER
				]
		answers: *only if multi was selected as the answer_type, open will be an empty array*
			ARRAY [
				NUMBERS *multiple choice values to use(the answer included).*
			]
	]