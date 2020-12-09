import express from 'express';

const app = express();

const PORT = 8000;

app.get('/', async function(req, res) {
    const response = {
        'url': 'http://localhost:8000/tariffs?consumption=4500'
    }
    res.send(response);
});

// interface ClockInterface {
//     currentTime: Date;
//     setTime(d: Date): void;
//   }
  
//   class Clock implements ClockInterface {
//     currentTime: Date = new Date();
//     setTime(d: Date) {
//       this.currentTime = d;
//     }
//     constructor(h: number, m: number) {}
//   }

interface Product {
    name: string;
    calcTariff(consumption: number): number;
}

class ProductA implements Product {
    name: string = '';
    calcTariff(consumption: number): number{
        return 0;
    }
    constructor(name: string) {
        this.name = name;
    }
}
class ProductB implements Product {
    name: string = '';
    calcTariff(consumption: number): number{
        return 100;
    }
    constructor(name: string) {
        this.name = name;
    }
}

app.get('/tariffs', async function(req, res) {

    // Access the 'consumption' query parameter
    if(req.query.consumption){
        let consumption:number = +req.query.consumption;

        const products: Product[] = [
            new ProductA('basic electricity tariff'),
            new ProductB('Packaged tariff')
        ];
        // const products = [
        //     {
        //         'name': 'basic electricity tariff',
        //         'base': 5,
        //         'min': 0,
        //         'rate': 0.22
        //     },
        //     {
        //         'name': 'Packaged tariff',
        //         'base': 800,
        //         'min': 4000,
        //         'rate': 0.30
        //     }
        // ]

        let prices = [];

        for(let i = 0; i < products.length; i++){
            // const price = products[i].base + ((consumption - products[i].min) * products[i].rate);
            const price = products[i].calcTariff(consumption);
            prices.push({
                'tariffName': products[i].name,
                'annualCost': price
            });
        }

        let response = {
            prices
        };
        res.send(response);
    } else {
        let error = {
            'error': 'consumption query required',
            'url': 'http://localhost:8000/tariffs?consumption=4500'
        };
        res.send(error);
    }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
