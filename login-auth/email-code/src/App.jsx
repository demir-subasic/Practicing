import React, { useState } from 'react';
import EmailVerificationForm from './EmailVerificationForm';
import VerificationCodeForm from './VerificationCodeForm';

const App = () => {
  const [email, setEmail] = useState('');
  const [verificationCodeSent, setVerificationCodeSent] = useState(false);

  const handleCodeSent = (email) => {
    setEmail(email);
    setVerificationCodeSent(true);
  };

  return (
    <div className='container'>
      <h1>Email Verifikacija</h1>
      {!verificationCodeSent ? (
        <EmailVerificationForm onCodeSent={handleCodeSent} />
      ) : (
        <VerificationCodeForm email={email} />
      )}
    </div>
  );
};

export default App;
