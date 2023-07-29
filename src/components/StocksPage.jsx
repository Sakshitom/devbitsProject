import React from 'react';
import { Link } from 'react-router-dom';

const stockData = [
  {
    name: 'Apple Inc.',
    symbol: 'AAPL',
    price: 122.15,
  },
  {
    name: 'Microsoft Corporation',
    symbol: 'MSFT',
    price: 235.99,
  },
  {
    name: 'Amazon.com Inc.',
    symbol: 'AMZN',
    price: 3052.03,
  },
  {
    name: 'Facebook Inc.',
    symbol: 'FB',
    price: 301.66,
  },
];

const StocksPage = () => {
  const handleBuyStock = (symbol) => {
    // Handle buying the stock with the specified symbol
    console.log(`Buying ${symbol} stock...`);
  };

  return (
    <div className="bg-gradient-to-b from-blue-400 to-blue-500 min-h-screen flex flex-col justify-center items-center">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Stocks</h2>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">What are Stocks?</h3>
          <p className="text-gray-700 mb-6">
            Stocks represent ownership in a company, giving investors a share of its assets and earnings.
            They can offer potential high returns, but also carry a higher risk of loss.
          </p>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Invest in Stocks?</h3>
          <p className="text-gray-700 mb-6">
            Stocks can provide the potential for long-term growth and higher returns than other types of investments.
            They also offer the opportunity to invest in companies that you believe in and support.
            However, it's important to keep in mind that stocks can be volatile and carry a higher risk of loss.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {stockData.map((stock) => (
              <div key={stock.symbol} className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center">
                <h4 className="text-lg font-bold text-gray-900 mb-2">{stock.name}</h4>
                <p className="text-3xl font-bold text-gray-900 mb-4">${stock.price.toFixed(2)}</p>
                <button onClick={() => handleBuyStock(stock.symbol)} className="inline-block bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-medium py-2 px-6 rounded-full transition duration-200 ease-in-out">
                  Buy
                </button>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/dashboard" className="inline-block font-medium text-gray-900 hover:text-gray-800 border-b-2 border-gray-900 pb-1 transition duration-200 ease-in-out">
              Back to Dashboard &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StocksPage;
