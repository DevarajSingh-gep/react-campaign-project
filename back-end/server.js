const express = require('express');
const campaignList = require('./data/campaign-list');

const app = express();

app.get('/', (req, res)=> {
    res.send('API is running');
});

app.get('/api/campaignData', (req, res)=> {
    // res.send('API is running');
    res.json(campaignList)
});

app.listen(5000, console.log("server is running on port 5000"));