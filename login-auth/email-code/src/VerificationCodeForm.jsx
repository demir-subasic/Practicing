import React, { useState } from 'react';

const VerificationCodeForm = ({ email }) => {
  const [verificationCode, setVerificationCode] = useState('');

  const handleVerificationCodeChange = (e) => {
    setVerificationCode(e.target.value);
  };

  const handleVerifyCode = async () => {
    try {
      const response = await fetch('http://localhost:3001/verify-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, verificationCode }),
      });

      if (response.ok) {
        alert('Kod je tačan. Uspesno ste se ulogovali.');
      } else {
        alert('Kod nije tačan.');
      }
    } catch (error) {
      console.error('Doslo je do greske prilikom zahteva:', error);
    }
  };

  return (
    <div>
      <label>
        Unesite verifikacioni kod:
        <input type="text" value={verificationCode} onChange={handleVerificationCodeChange} />
      </label>
      <button onClick={handleVerifyCode}>Potvrdi</button>
    </div>
  );
};

export default VerificationCodeForm;
