"use client"

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation'
import { InputSection } from '@/app/(session)/components/InputUtils';
import { PrimaryActionButton } from '@/app/(session)/components/Buttons';


export default function SetNewPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');


  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const response = await fetch('http://127.0.0.1:8000/users/passwordset', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ new_password: newPassword}),
      credentials: 'include',
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