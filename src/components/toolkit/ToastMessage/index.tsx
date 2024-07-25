import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ToastMessage = () => {
  return (
    <ToastContainer
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      position="top-center"
      rtl={false}
      theme="light"
      closeOnClick
      draggable
      pauseOnFocusLoss
      pauseOnHover
    />
  )
}

export default ToastMessage
