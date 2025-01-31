"use client"

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation'
import { InputSection } from '../components/InputUtils';
import { PrimaryActionButton } from '../components/Buttons';

export default function NewPassword() {
  const searchParams = useSearchParams()
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [verificationId, setVerificationId] = useState('');

  const verification_code = searchParams.get("verification_code") as string;
  const username = searchParams.get("username") as string;

  console.log('verification_code: ', verification_code, " id: ", username );

  useEffect(() => {
    const validateCode = async () => {
      const response = await fetch('http://127.0.0.1:8000/password/validate/code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code: verification_code, username: username }),
      });

      if (response.ok) {
        const data = await response.json();
        setVerificationId(data.verification_id);
        console.log('Code validated successfully');
      } else {
        console.error('Error validating code');
      }
    };

    if (verification_code && username) {
      validateCode();
    }
  }, [verification_code, username]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const response = await fetch('http://127.0.0.1:8000/password/update', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ new_password: newPassword, verification_id: verificationId, username }),
    });

    if (response.ok) {
      console.log('Password updated successfully');
    } else {
      console.error('Error updating password');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputSection name="new_password" label='new password' type='password' value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
      <br />
      <InputSection name="confirm_password" label='confirm password' type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
      <br />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <PrimaryActionButton message='Reset Password'/>
    </form>
  );
}

// "use client"

// import React, { useState, useEffect } from 'react';
// import { InputSection } from '../components/InputUtils';
// import { PrimaryActionButton } from '../components/Buttons';

// export default function NewPassword() {
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');
//   const [verificationId, setVerificationId] = useState('');

//   const urlParams = new URLSearchParams(window.location.search);
//   const verification_code = urlParams.get('verification_code');
//   const username = urlParams.get('username');

//   console.log('verification_code: ', verification_code, " id: ", username );

//   useEffect(() => {
//     const validateCode = async () => {
//       const response = await fetch('http://127.0.0.1:8000/validate/code', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ code: verification_code, username: username }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setVerificationId(data.verification_id);
//         console.log('Code validated successfully');
//       } else {
//         console.error('Error validating code');
//       }
//     };

//     if (verification_code && username) {
//       validateCode();
//     }
//   }, [verification_code, username]);

//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();

//     if (newPassword !== confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }

//     const response = await fetch('http://127.0.0.1:8000/password/update', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ new_password: newPassword, verification_id: verificationId, username }),
//     });

//     if (response.ok) {
//       console.log('Password updated successfully');
//     } else {
//       console.error('Error updating password');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <InputSection name="new_password" label='new password' type='password' value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
//       <br />
//       <InputSection name="confirm_password" label='confirm password' type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
//       <br />
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <PrimaryActionButton message='Reset Password'/>
//     </form>
//   );
// }


// import React, { useState } from 'react';
// import { InputSection } from '../components/InputUtils';
// import { PrimaryActionButton } from '../components/Buttons';

// export default function NewPassword() {
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');

//     const urlParams = new URLSearchParams(window.location.search);
//     const verification_code = urlParams.get('verification_code');
//     const id = urlParams.get('id');

//     console.log('verification_code: ', verification_code, " id: ", id )

//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();

//     if (newPassword !== confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }

    

//     const response = await fetch('http://127.0.0.1:8000/password/update', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ new_password: newPassword, verification_code, id }),
//     });

//     if (response.ok) {
//       // Handle successful response
//       console.log('Password updated successfully');
//     } else {
//       // Handle error response
//       console.error('Error updating password');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//         <InputSection name="new_password" type='password' />
//       {/* <label>
//         New Password:
//         <input
//           type="password"
//           value={newPassword}
//           onChange={(e) => setNewPassword(e.target.value)}
//           required
//         />
//       </label> */}
//       <br />
//         <InputSection name="confirm_password" type='password' />
//       {/* <label>
//         Confirm Password:
//         <input
//           type="password"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//           required
//         />
//       </label> */}
//       <br />
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <PrimaryActionButton message='Reset Password'/>
//       {/* <button type="submit"></button> */}
//     </form>
//   );
// }