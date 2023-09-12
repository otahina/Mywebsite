const express = require('express');
const app = express();

const port = process.env.PORT || 5001;


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/../index.html');
});

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});