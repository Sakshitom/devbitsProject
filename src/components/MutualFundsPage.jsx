import React from 'react';
import { Link } from 'react-router-dom';

const mutualFundData = [
  {
    name: 'Vanguard Total Stock Market Index Fund',
    symbol: 'VTSAX',
    price: 112.59,
  },
  {
    name: 'Fidelity 500 Index Fund',
    symbol: 'FXAIX',
    price: 160.29,
  },
  {
    name: 'T. Rowe Price Blue Chip Growth Fund',
    symbol: 'TRBCX',
    price: 141.24,
  },
];

const MutualFundsPage = () => {
  const handleBuyMutualFund = (symbol) => {
    // Handle buying the mutual fund with the specified symbol
    console.log(`Buying ${symbol} mutual fund...`);
  };

  return (
    <div className="bg-gradient-to-b from-blue-400 to-blue-500 min-h-screen flex flex-col justify-center items-center">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Mutual Funds</h2>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">What are Mutual Funds?</h3>
          <p className="text-gray-700 mb-6">
            Mutual funds are a type of investment vehicle that pools money from multiple investors to purchase a portfolio of stocks, bonds, or other securities.
            They offer diversification and professional management, but also carry fees and expenses.
          </p>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Invest in Mutual Funds?</h3>
          <p className="text-gray-700 mb-6">
            Mutual funds offer the potential for diversification and professional management, which can help reduce risk and increase returns.
            They also offer easy access to a diversified portfolio, as well as the ability to invest in a variety of asset classes.
            However, it's important to keep in mind that mutual funds can carry fees and expenses that can impact returns.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {mutualFundData.map((mutualFund) => (
              <div key={mutualFund.symbol} className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center">
                <h4 className="text-lg font-bold text-gray-900 mb-2">{mutualFund.name}</h4>
                <p className="text-3xl font-bold text-gray-900 mb-4">${mutualFund.price.toFixed(2)}</p>
                <button onClick={() => handleBuyMutualFund(mutualFund.symbol)} className="inline-block bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-medium py-2 px-6 rounded-full transition duration-200 ease-in-out">
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

export default MutualFundsPage;
