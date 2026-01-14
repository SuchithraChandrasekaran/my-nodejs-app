const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Single route - blue background
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Simple Node-js App</title>
        <style>
            body {
                background: peachpuff;
                margin: 0;
                padding: 0;
                height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
                color: white;
                font-family: Arial;
            }
            h1 {
                font-size: 48px;
            }
        </style>
    </head>
    <body>
        <h1>Simple Node.js </h1>
    </body>
    </html>
  `);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
