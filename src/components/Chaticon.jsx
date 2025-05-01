import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Chaticon() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      {/* Show the chat icon only when the popup is not open */}
      {!show && (
        <div className="flex justify-end">
          <img
            onClick={handleShow}
            className="fixed z-[10000000] bottom-5 right-5 w-10 cursor-pointer"
            src="https://democc.contegris.com:8443/store/2024/7/2/chatBot/2-1719910051430/image-removebg-preview-1719910051428-1719910052161.png"
            alt="Chat Icon"
          />
        </div>
      )}

      {/* Popup styled to appear in the same place as the icon */}
      {show && (
        <div
          className="fixed bottom-5 right-5 z-[10000000] bg-white shadow-lg border rounded-lg w-[300px]"
          style={{ minWidth: '300px' }}
        >
          <div className="relative flex flex-col bg-[rgb(29,29,29)] text-white p-4">
            <h5 className="font-bold">Baroque Bot</h5>
            <p>Welcome to Baroque AI Bot</p>

            <button
              type="button"
              className="absolute top-2 right-2 bg-white text-black rounded-full w-6 h-6 flex items-center justify-center focus:outline-none shadow"
              onClick={handleClose}
            >
              &times;
            </button>
          </div>
          <div className="text-gray-800 p-3 bg-white">
            <p className="font-bold">Your conversations</p>
            <div className="border rounded-lg shadow p-4 mt-2 bg-gray-50">
              <p className="font-bold">Start Conversation</p>
              <p className="text-sm text-gray-500">Our usual reply time</p>
              <p className="text-sm text-gray-500">A few minutes</p>
              <Button variant="dark" className="mt-3 w-full">
                Send us a message
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chaticon;
