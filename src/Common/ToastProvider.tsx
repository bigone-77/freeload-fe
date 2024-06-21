'use client';

import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export default function ToastProvider() {
  return (
    <ToastContainer
      toastClassName={() =>
        'bg-black/80 text-center text-text50 font-semibold py-4 pr-5 rounded-lg shadow-lg mb-6'
      }
      position="bottom-center"
      hideProgressBar
      closeOnClick
      draggable
      pauseOnHover={false}
      closeButton={false}
      autoClose={2000}
    />
  );
}
