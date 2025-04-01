import React from 'react';

const BankInformation = ({ cif, accountNumber, totalAmount, dailyLimit, userEmail }) => {
  const bankInfoStyle = {
    backgroundColor: 'rgba(255, 255, 0, 0.6)',
    padding: '25px',
    borderRadius: '8px',
    width: '96%',
    height: '40vh',
    animation: 'dayNightAnimation 20s infinite linear',
    backgroundSize: 'cover',
    overflow: 'hidden',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', // Create 3 equal-width columns
  };

  const h2Style = {
    textAlign: 'center', // Center align the text horizontally
    gridColumn: 'span 3', // Span the entire width of the grid (3 columns)
  };

  return (
    <div style={bankInfoStyle}>
      <h2 style={h2Style}>Bank Information</h2>
      <p><b>IFSC Code:</b> YBSI5689247</p>
      <p><b>Email:</b> Anyabank@email.com</p>
      <p><b>Bank Name:</b> Anya Bank</p>
      <p><b>Location:</b> LOS VEGAS</p>
      <p><b>Total Amount in Bank:</b> {totalAmount}</p>      <p><b>Daily Limit:</b> 100,000</p>
      <p><b>CIF:</b> 9494380178-5</p>
      <p><b>Account Number: </b>489746985894</p>
      <p><b>User Email:</b> prakashatmakuru399@gmail.com</p>
    </div>
  );
};

export default BankInformation;
