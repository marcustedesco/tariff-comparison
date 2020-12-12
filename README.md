# Tariff Comparison

## How to use

- Local dev: `npm run dev`
- Build: `npm run build`
- Test: `npm run test`
- Serve: `npm run serve`

## REST API

GET tariffs: `http://localhost:8000/tariffs`

Query: `?consumption=4500` in (kWh/year)

Response:
```
{
    products: [
        {
            tariffName: '',
            annualCost: 0  <!--euros/year-->
        }
    ]
}
```