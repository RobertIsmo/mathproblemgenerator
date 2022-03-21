const express = require('express');
const cors = require('cors')
const QuestionRoute = require('./src/routes/question');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/v1', QuestionRoute);
const port = 333

app.listen(port, () => {
	console.log(`listening on port ${port} 🚀`)
});