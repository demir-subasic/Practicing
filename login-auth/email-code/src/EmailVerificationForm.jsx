import React, { useState } from 'react';

const EmailVerificationForm = ({ onCodeSent }) => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSendCode = async () => {
    try {
      const response = await fetch('http://localhost:3001/send-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        alert('Kod je poslat na email.');
        onCodeSent(email);
      } else {
        alert('Došlo je do greške prilikom slanja koda.');
      }
    } catch (error) {
      console.error('Greška prilikom slanja zahteva:', error);
    }
  };

  return (
    <div>
      <label>
        Unesite email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <button onClick={handleSendCode}>Posalji kod</button>
    </div>
  );
};

export default EmailVerificationForm;
