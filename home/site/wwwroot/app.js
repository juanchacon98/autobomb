const express = require('express');
const app = express();
const path = require('path');
const db = require('./database');

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/submit-data', async (req, res) => {
    const { volumen, fecha, hora } = req.body;

    try {
        const [result] = await db.query('INSERT INTO sensor_data (volumen, fecha, hora) VALUES (?, ?, ?)', [volumen, fecha, hora]);
        res.status(200).json({ message: 'Data saved successfully.' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'An error occurred while saving data.' });
    }
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
