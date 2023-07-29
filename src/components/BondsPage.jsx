import React from 'react';
import { Link } from 'react-router-dom';

const bondData = [
  {
    name: 'US Treasury Bond',
    symbol: 'USTB',
    price: 1024.35,
  },
  {
    name: 'Corporate Bond',
    symbol: 'CRPB',
    price: 986.72,
  },
  {
    name: 'Municipal Bond',
    symbol: 'MNCPB',
    price: 1032.51,
  },
  {
    name: 'International Bond',
    symbol: 'INTLB',
    price: 1112.91,
  },
];

const BondData = () => {
  return (
    <div className="bg-gradient-to-b from-blue-400 to-blue-500 min-h-screen flex flex-col justify-center items-center">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Bonds</h2>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">What are Bonds?</h3>
          <p className="text-gray-700 mb-6">
            Bonds are a type of investment that involve loaning money to a company or government.
            In exchange, the bondholder receives regular interest payments and the promise of repayment of the original loan amount when the bond matures.
          </p>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Invest in Bonds?</h3>
          <p className="text-gray-700 mb-6">
            Bonds can provide a stable source of income and are generally considered to be less risky than stocks.
            They can also be used to diversify a portfolio and reduce overall investment risk.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {bondData.map((bond) => (
              <div key={bond.symbol} className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center">
                <h4 className="text-lg font-bold text-gray-900 mb-2">{bond.name}</h4>
                <p className="text-3xl font-bold text-gray-900 mb-4">${bond.price.toFixed(2)}</p>
                <button className="inline-block bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-medium py-2 px-6 rounded-full transition duration-200 ease-in-out">
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

export default BondData;
