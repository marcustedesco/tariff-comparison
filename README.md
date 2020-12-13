# Tariff Comparison

## How to use

- Local dev: `npm run dev`
- Build: `npm run build`
- Test: `npm run test`
- Serve: `npm run serve`

## REST API

Example: http://localhost:8000/tariffs?consumption=4500

GET tariffs: `http://localhost:8000/tariffs`

Query: `?consumption=4500` in (kWh/year)

Response:
```
{
    tariffs: [
        {
            name: '',
            annualCost: 0  <!--euros/year-->
        }
    ]
}
```