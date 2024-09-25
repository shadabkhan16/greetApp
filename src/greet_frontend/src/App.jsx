import React, { useEffect, useState } from 'react';
import bankImage from "/favicon.ico"
import { greet_backend  as initialValue} from '../../declarations/greet_backend';

const App = () => {
  const [currentValue, setCurrentValue] = useState(0); // Default balance
  const [topUpAmount, setTopUpAmount] = useState(0);
  const [withdrawalAmount, setWithdrawalAmount] = useState(0);

  useEffect(() => {
    let isMounted = true; // This flag ensures that we update the state only if the component is mounted
  
    const fetchBalance = async () => {
      const currentAmount = await initialValue.checkBalance();
      if (isMounted) {
        setCurrentValue(currentAmount);
      }
    };
  
    fetchBalance();
  
    return () => {
      isMounted = false; // Cleanup function to prevent state update if the component is unmounted
    };
  }, []);

  const handleTopUpChange = (event) => {
    setTopUpAmount(parseFloat(event.target.value)); // Set top-up amount
  };

  const handleWithdrawChange = (event) => {
    setWithdrawalAmount(parseFloat(event.target.value)); // Set withdrawal amount
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform the top-up
    let newValue = currentValue + topUpAmount;

    // Perform the withdrawal if there is enough balance
    if (withdrawalAmount <= newValue) {
      newValue -= withdrawalAmount;
      alert('Transaction successful!');
    } else {
      alert('Insufficient balance!');
    }

    // Update the current balance
    setCurrentValue(newValue);

    // Clear input fields after submission
    setTopUpAmount(0);
    setWithdrawalAmount(0);
  };

  return (
    <div className="container mx-auto mt-10 p-5 max-w-md border rounded-lg shadow-lg bg-white">
      <div className="text-center">
        <img src={bankImage} alt="DBank logo" className="mx-auto mb-4 w-24" />
        <h1 className="text-2xl font-bold mb-4">Current Balance: <span className="text-green-600">${currentValue.toFixed(2)}</span></h1>
      </div>

      <div className="border-b my-4"></div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold mb-2">Amount to Top Up</h2>
          <input
            id="input-amount"
            type="number"
            step="0.01"
            min="0"
            value={topUpAmount}
            onChange={handleTopUpChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Amount to Withdraw</h2>
          <input
            id="withdrawal-amount"
            type="number"
            step="0.01"
            min="0"
            value={withdrawalAmount}
            onChange={handleWithdrawChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <input
            id="submit-btn"
            type="submit"
            value="Finalise Transaction"
            className="w-full py-2 px-4 bg-green-600 text-white font-bold rounded-md hover:bg-green-700 transition-colors"
          />
        </div>
      </form>
    </div>
  );
};

export default App;
