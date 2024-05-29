// src/components/Invoice.js
import React from 'react';

const Invoice = ({ invoiceNumber, selectedProjects, totalPrice }) => {
  const generateInvoiceContent = () => {
    let content = `<div>
      <h2>Invoice Number: ${invoiceNumber}</h2>
      <h3>Items Purchased:</h3>
      <ul>`;
    selectedProjects.forEach((project, index) => {
      content += `<li><strong>Project ${index + 1}:</strong> ${project.title}</li>`;
    });
    content += `</ul>
      <h3>Total Price: £${totalPrice.toFixed(2)}</h3>
    </div>`;
    return content;
  };

  const invoiceContent = generateInvoiceContent();

  return <div dangerouslySetInnerHTML={{ __html: invoiceContent }} />;
};

export default Invoice;
