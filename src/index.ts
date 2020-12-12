import express from 'express';
import { Product } from './types';
import { ProductA, ProductB } from './products';

const app = express();

const PORT = 8000;

app.get('/', async function(req, res) {
    const response = {
        'example': 'http://localhost:8000/tariffs?consumption=4500'
    }
    res.send(response);
});

app.get('/tariffs', async function(req, res) {
    // Check for 'consumption' query parameter
    if(req.query.consumption){
        let consumption:number = +req.query.consumption;

        const products: Product[] = [
            new ProductA(),
            new ProductB()
        ];

        let prices = [];

        for(let i = 0; i < products.length; i++){
            const price = products[i].calcTariff(consumption);
            prices.push({
                'tariffName': products[i].name,
                'annualCost': price
            });
        }

        let response = { prices };

        res.send(response);
    } else {
        let error = {
            'error': 'query parameter required: consumption',
            'example': 'http://localhost:8000/tariffs?consumption=4500'
        };
        res.send(error);
    }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
