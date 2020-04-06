const path = require('path');
const express = require('express');
const app = express();///use epress app
const publicPath = path.join(__dirname, '..', 'public'); // .. is to go up a dir than to public
const port = process.env.PORT || 3000;   ///this is to get the dynamic port set by heroku or use 3000

app.use(express.static(publicPath));  //which dir we need to serve

app.get('*', (req, res) => {       ///this is used so that we dont get error when we refresh on /create or other url
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {     ///start the server
    console.log('Server is up!');
});