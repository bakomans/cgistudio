// src/pages/AdminInvoicesPage.js
import React, { useEffect, useState } from 'react';
import { useAuth } from '../services/auth'; 
import { ref, onValue } from 'firebase/database';
import { database } from '../firebaseConfig';
import Invoice from '../components/invoices';
import { useNavigate } from 'react-router-dom';

const AdminInvoicesPage = () => {
  const [invoices, setInvoices] = useState([]);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || !user.isAdmin) { 
      navigate('/login');
      return;
    }

    const invoicesRef = ref(database, 'invoices');
    onValue(invoicesRef, (snapshot) => {
      const data = snapshot.val();
      const invoiceList = [];
      for (const id in data) {
        invoiceList.push(data[id]);
      }
      setInvoices(invoiceList);
    });
  }, [user, navigate]);

  if (!user || !user.isAdmin) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>All Invoices</h1>
      {invoices.map((invoice, index) => (
        <Invoice
          key={index}
          invoiceNumber={invoice.invoiceNumber}
          selectedProjects={invoice.projects}
          totalPrice={invoice.totalPrice}
        />
      ))}
    </div>
  );
};

export default AdminInvoicesPage;
