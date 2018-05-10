
const express = require('express');
const PORT = process.env.PORT || 9000;

const app = express();

app.get('/', (reg, res) => {
    res.send('<h1>App is working!</h1>');
});

app.listen(PORT, () => {
    console.log('Server running at localhost:' + PORT);
}).on('error', (err) => {
    console.log('server error: ', err.message);
    console.log('you already have a server running on port: ' + PORT);
});