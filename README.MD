go to [http://math.robertismo.com/v1/docs](http://math.robertismo.com/v1/docs) for documentation

<div>
	<h1>Hello, this is the Documentation for Version 1.0 of my math problem generator API.</h1>
	<p>The root of the endpoint: <a href="http://math.robertismo.com/v1">http://math.robertismo.com/v1</a>, brings you to this documentation page.</p>
	<p><a href="http://math.robertismo.com/v1/docs">http://math.robertismo.com/v1/docs</a>, also brings you to this documentation page.</p>
	<br/>
	<h2>Routes</h2>
	<p>To use this API is very simple, the route structure is:</p>
	<p>/ANSWER_MODE/DIFFICULTY/TYPE/AMOUNT</p>
	<p>or</p>
	<p>/ANSWER_MODE/any/AMOUNT</p>
	<br/>
	<h3>ANSWER_MODE</h3>
	<ul>
		<li><i>open</i>(responds with a question and it's answer)</li>
		<li><i>multi</i>(responds with multiple choice options as well as the question and it's answer.)</li>
	</ul>
	<h3>DIFFICULTY</h3>
	<i>An integer setting the amount of digits the question will use</i>
	<h3>TYPE</h3>
	<ul>
		<li><i>addition</i></li>
		<li><i>subtraction</i></li>
		<li><i>multiplication</i></li>
		<li><i>division</i></li>
	</ul>
	<h3>AMOUNT</h3>
	<i>An integer setting how many questions should be responded</i>
	<h2>Examples</h2>
	<ul>
		<li><a href="http://math.robertismo.com/v1/multi/any/30">http://math.robertismo.com/v1/multi/any/30</a> this responds with 30(max. 50) multiple choice questions of any type.</li>
		<li><a href="http://math.robertismo.com/v1/open/2/addition/5">http://math.robertismo.com/v1/open/2/addition/5</a> this responds with 5 two-digit addition questions.</li>
		<li><a href="http://math.robertismo.com/v1/multi/1/division/1">http://math.robertismo.com/v1/multi/1/division/1</a> this responds with a single singular-digit multiple choice division question.</li>
	</ul>
</div>
<br/>
<p>
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
</p>