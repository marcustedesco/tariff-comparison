import express from 'express';
import { TariffComparisonService } from './services';

const app = express();
const PORT = 8000;

const tariffComparisonService: TariffComparisonService = new TariffComparisonService();

app.get('/', async function(req, res) {
    const response = {
        'example': 'http://localhost:8000/tariffs?consumption=4500'
    }
    res.send(response);
});

app.get('/tariffs', async function(req, res) {
    // Check for 'consumption' query parameter
    if(req.query.consumption){
        // cast the string to number
        let consumption: number = +req.query.consumption;


        // const products: Product[] = [
        //     new ProductA(),
        //     new ProductB()
        // ];

        // let prices = [];

        // for(let i = 0; i < products.length; i++){
        //     const price = products[i].calcTariff(consumption);
        //     prices.push({
        //         'tariffName': products[i].name,
        //         'annualCost': price
        //     });
        // }

        // let response = { prices };

        let response = tariffComparisonService.getTariffs(consumption);

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
