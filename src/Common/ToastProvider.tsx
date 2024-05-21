'use client';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function ToastProvider() {
  return <ToastContainer autoClose={2000} />;
}

export default ToastProvider;
