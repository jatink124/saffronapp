// SampleModal.js

import React from 'react';
import { useSnackbar } from 'notistack';

const SampleModal = ({ showModal, onClose, onSampleSubmit, userInfo, onUserInfoChange }) => {
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = () => {
    // Perform any additional validation if needed
    // For simplicity, we'll assume all fields are required
    if (userInfo.name && userInfo.address && userInfo.pincode && userInfo.contactNumber) {
      onSampleSubmit(userInfo);
      // Optionally, you can reset the form fields after submission
      // setUserInfo({ name: '', address: '', pincode: '', contactNumber: '' });
      enqueueSnackbar('Thank you! We will send you the sample.', { variant: 'success' });
      onClose();
    } else {
      // Handle validation error (e.g., display an error message)
      console.error('All fields are required');
      enqueueSnackbar('Please fill in all required fields.', { variant: 'error' });
    }
  };

  return (
    showModal && (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Enter User Information</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
              <input
                type="text"
                name="name"
                value={userInfo.name}
                onChange={onUserInfoChange}
                className="p-2 border rounded w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Address:</label>
              <textarea
                name="address"
                value={userInfo.address}
                onChange={onUserInfoChange}
                className="p-2 border rounded w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Pincode:</label>
              <input
                type="text"
                name="pincode"
                value={userInfo.pincode}
                onChange={onUserInfoChange}
                className="p-2 border rounded w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Contact Number:</label>
              <input
                type="text"
                name="contactNumber"
                value={userInfo.contactNumber}
                onChange={onUserInfoChange}
                className="p-2 border rounded w-full"
              />
            </div>
            <div className="flex justify-end mt-4">
              <button
                type="button"
                onClick={onClose}
                className="mr-2 px-4 py-2 bg-gray-500 text-white rounded"
              >
                Close
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default SampleModal;
