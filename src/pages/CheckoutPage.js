import React, { useState } from 'react';

const CheckoutPage = ({ selectedProducts }) => {
  const [paymentInfo, setPaymentInfo] = useState({
    accountNumber: '',
    amount: '',
    title: '',
  });
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  const handlePayment = () => {
    // Tutaj można dodać logikę obsługi płatności, np. wysłanie żądania do serwera
    // i otrzymanie potwierdzenia płatności.
    // Załóżmy, że płatność jest zawsze udana w tym przykładzie.
    setPaymentSuccess(true);
  };

  const totalAmount = selectedProducts.reduce((total, product) => total + product.price, 0);

  return (
    <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <h2 className="text-3xl font-semibold mb-8">Checkout</h2>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Selected Products:</h3>
            <ul className="divide-y divide-gray-200">
              {selectedProducts.map((product, index) => (
                <li key={index} className="py-2">
                  <span className="font-semibold">{product.title}</span> - ${product.price.toFixed(2)}
                </li>
              ))}
            </ul>
            <p className="mt-4 font-semibold">Total Amount: ${totalAmount.toFixed(2)}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Payment Details:</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="accountNumber" className="block text-gray-700 dark:text-gray-300 font-semibold">Account Number:</label>
                <input type="text" id="accountNumber" name="accountNumber" value={paymentInfo.accountNumber} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div className="mb-4">
                <label htmlFor="amount" className="block text-gray-700 dark:text-gray-300 font-semibold">Amount:</label>
                <input type="text" id="amount" name="amount" value={paymentInfo.amount} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div className="mb-4">
                <label htmlFor="title" className="block text-gray-700 dark:text-gray-300 font-semibold">Title:</label>
                <input type="text" id="title" name="title" value={paymentInfo.title} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <button type="button" onClick={handlePayment} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Pay</button>
            </form>
            {paymentSuccess && (
              <p className="mt-4 text-green-600">Payment successful! Thank you for your purchase.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
