import React from 'react';
import { Link } from 'react-router-dom';

const InvestmentInstruments = () => {
  return (
    <div className="bg-gradient-to-b from-yellow-400 to-yellow-200 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Financial Investment Instruments</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-medium text-gray-900 mb-4">Stocks</h3>
            <p className="text-gray-700 mb-6">
              Stocks represent ownership in a company, giving investors a share of its assets and earnings.
              They can offer potential high returns, but also carry a higher risk of loss.
            </p>
            <div className="flex justify-center">
              <Link to="/stocks" className="inline-block font-medium text-blue-600 hover:text-blue-800 border-b-2 border-blue-600 pb-1 transition duration-200 ease-in-out">
                Learn More &rarr;
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-medium text-gray-900 mb-4">Bonds</h3>
            <p className="text-gray-700 mb-6">
              Bonds are a type of loan that investors make to companies or governments in exchange for regular interest payments and the return of the principal investment.
              They offer lower returns than stocks, but also have lower risk and can provide a more stable income stream.
            </p>
            <div className="flex justify-center">
              <Link to="/bonds" className="inline-block font-medium text-blue-600 hover:text-blue-800 border-b-2 border-blue-600 pb-1 transition duration-200 ease-in-out">
                Learn More &rarr;
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-medium text-gray-900 mb-4">Mutual Funds</h3>
            <p className="text-gray-700 mb-6">
              Mutual funds pool money from multiple investors to purchase a diversified portfolio of stocks, bonds, and other assets.
              They offer the potential for diversification and professional management, but also charge fees that can eat into returns.
            </p>
            <div className="flex justify-center">
              <Link to="/mutual-funds" className="inline-block font-medium text-blue-600 hover:text-blue-800 border-b-2 border-blue-600 pb-1 transition duration-200 ease-in-out">
                Learn More &rarr;
              </Link>
            </div>
          </div>
          {/* Add more investment instruments here */}
        </div>
      </div>
    </div>
  );
};

export default InvestmentInstruments;
