import { StockApiService } from './services/StockApiService.js';

const service = new StockApiService(process.env.FMP_API_KEY, true);
service.fetchStockData(['GILD', 'TARA']).then(data => console.log(data));
