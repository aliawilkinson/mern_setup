
const express = require('express');
const cors = require('cors');
const { resolve } = require('path');
const PORT = process.env.PORT || 9000;

const app = express();

app.use(express.json());

app.use(cors());

app.use(express.static(resolve(__dirname, 'client', 'dist')));

app.post('/api/send-data', (req, res) => {
    console.log('Data sent: ', req.body);

    res.send({ success: true, mirror: req.body });
});

app.get('/api/user-data', (req, res) => {
    const user = {
        name: 'Jim Bob',
        email: 'jimbob@gmail.com'
    }

    res.send(user);
});

app.get('/api/get-article', (req, res) => {
    const article = {
        title: 'Some Article',
        author: 'Bean McQueen',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum tempora magnam modi qui? Ea nisi error quaerat aliquid nemo eveniet!'
    };

    res.send(article);
});

app.get('*', (req, res) => {
    res.sendFile(resolve(__dirname, 'client', 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log('Server running at localhost:' + PORT);
}).on('error', (err) => {
    console.log('server error: ', err.message);
    console.log('you already have a server running on port: ' + PORT);
});


