const express = require('express');
const bodyParser = require('body-parser');
const mc = require(__dirname + '/controllers/messages_controller');

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + './../public/build'));

app.get('/api/messages', mc.read);
app.post('/api/messages', mc.create);
app.put('/api/messages/:id', mc.update);
app.delete('/api/messages/:id', mc.delete);

const port = 3000;
app.listen(port, () => {
    console.log('It\'s LIT on ' + port + ' fam');
})