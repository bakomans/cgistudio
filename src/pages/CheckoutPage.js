import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';
import { useAuth } from '../services/auth'; // Zaimportuj usługę uwierzytelniania z Twojej aplikacji

const CheckoutPage = () => {
  const [selectedProjects, setSelectedProjects] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const navigate = useNavigate();
  const { user } = useAuth(); // Uzyskaj dostęp do zalogowanego użytkownika

  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem('selectedProjects')) || [];
    setSelectedProjects(storedProjects);

    const projectTotal = storedProjects.reduce((total, project) => total + project.price, 0);
    setTotalPrice(projectTotal);

    const lastInvoiceNumber = JSON.parse(localStorage.getItem('lastInvoiceNumber')) || 0;
    const newInvoiceNumber = `CGI-${String(lastInvoiceNumber + 1).padStart(4, '0')}`;
    setInvoiceNumber(newInvoiceNumber);
    localStorage.setItem('lastInvoiceNumber', JSON.stringify(lastInvoiceNumber + 1));

    // Sprawdź, czy użytkownik jest zalogowany, a następnie wyślij e-mail
    if (user) {
      sendEmail(storedProjects, newInvoiceNumber, projectTotal, user.email);
      sendEmailToStudio(storedProjects, newInvoiceNumber, projectTotal, user.email);
    }
  }, [user]);

  const sendEmail = (projects, invoiceNumber, total, userEmail) => {
    const templateParams = {
      to_email: userEmail,
      reply_to: 'cgistudiodream@gmail.com',
      invoice_number: invoiceNumber,
      total_price: total.toFixed(2),
    };

    emailjs.send('service_swzxk0c', 'template_ddg7f5b', templateParams, 'rfrqp0MItfGto9k-F')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  const sendEmailToStudio = (projects, invoiceNumber, total, userEmail) => {
    const templateParams = {
      to_email: 'cgistudiodream@gmail.com',
      reply_to: userEmail,
      invoice_number: invoiceNumber,
      total_price: total.toFixed(2),
    };

    emailjs.send('service_swzxk0c', 'template_ddg7f5b', templateParams, 'rfrqp0MItfGto9k-F')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  const handlePlaceOrder = () => {
    const purchasedProjects = JSON.parse(localStorage.getItem('purchasedProjects')) || [];
    const newPurchase = {
      invoiceNumber,
      projects: selectedProjects,
      totalPrice,
    };
    purchasedProjects.push(newPurchase);
    localStorage.setItem('purchasedProjects', JSON.stringify(purchasedProjects));    localStorage.removeItem('selectedProjects');
    navigate('/');
  };

  return (
    <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <div className="text-center mb-6">
          <h3 className="text-3xl font-semibold text-blue-900 dark:text-blue-200">
            Order Summary
          </h3>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Invoice Number: {invoiceNumber}</h4>
          <ul className="divide-y divide-gray-200">
            {selectedProjects.map((project, index) => (
              <li key={index} className="py-4 flex justify-between items-center">
                <div className="flex items-center">
                  <img src={project.image} alt={project.title} className="w-32 h-32 mr-4 object-cover rounded-lg" />
                  <div>
                    <h5 className="text-lg font-bold text-gray-700 dark:text-gray-300">{project.title}</h5>
                    <p className="text-gray-900 dark:text-gray-200">{project.description}</p>
                    <p className="text-lg font-bold text-gray-900 dark:text-gray-200">£{project.price.toFixed(2)}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="text-center mt-6">
            <p className="text-xl font-bold text-gray-900 dark:text-gray-200">Total Price: £{totalPrice.toFixed(2)}</p>
          </div>
          <div className="text-center mt-6">
            <p className="text-lg text-gray-900 dark:text-gray-200">
              A confirmation email with payment instructions has been sent to your email. 
              You will receive all the files within 24 hours after payment.
            </p>
          </div>
          <div className="flex justify-center mt-10">
            <button
              onClick={handlePlaceOrder}
              className="px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 transition-all duration-300"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;


