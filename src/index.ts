import express from 'express';

const app = express();

const PORT = 8000;

const response = {
    'prices': [
        {
            'tariffName': '',
            'annualCost': 0
        }
    ]
}

app.get('/prices', (req, res) => res.send(response));

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
