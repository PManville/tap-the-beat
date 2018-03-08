const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const PORT = 8888;

app.get(`/restartGame`, function(req, res) {
	res.send({
		bpmCurrent: 0,
		currentTime: Date.now(),
		started: false,
		time: 30
	});
});

const errorResponse = (res, status, text) => {
	res.status(status);
	res.send({ error: text });
}

app.listen(PORT, function () {
  console.log(`Async request server now running on port ${PORT}.`);
});
