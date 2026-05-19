const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/account', (req, res) => {
    console.log("Received from Salesforce:", req.body);

    // Example processing
    res.status(200).json({
        message: "Account received successfully"
    });
});

app.listen(3000, () => console.log('API running...'));
