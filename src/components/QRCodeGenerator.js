//QRCodeGenerator.js

import React from 'react';
import QRCode from 'qrcode.react';

const QRCodeGenerator = () => {
  const websiteLink = 'https://www.linkedin.com/in/atmakuru-prakash/';

  return (
    <div>
      <h2>Scan the QR Code to Open the Website</h2>
      <QRCode value={websiteLink} />
    </div>
  );
};

export default QRCodeGenerator;
