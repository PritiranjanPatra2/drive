import React, { useState } from 'react';
import { Modal, Box } from '@mui/material';
import chatbot from '../assets/chatbot.png'

const questions =[
    {
      "id": 1,
      "question": "How do I upload a new file?",
      "answer": "To upload a new file, click the '+ New' button on the left sidebar and select 'File upload'. Then, choose the file you want to upload from your computer."
    },
    {
      "id": 2,
      "question": "How can I create a new folder?",
      "answer": "To create a new folder, click the '+ New' button on the left sidebar and select 'Folder'. Then, name your new folder and click 'Create'."
    },
    {
      "id": 3,
      "question": "How do I delete a file?",
      "answer": "To delete a file, click the 'Delete' button next to the file you want to remove."
    },
    {
      "id": 4,
      "question": "How can I sort my files?",
      "answer": "To sort your files, click on the sorting icon next to the search bar. You can sort by 'Name Ascending', 'Name Descending', 'Date Ascending', or 'Date Descending'."
    },
    {
      "id": 5,
      "question": "How do I switch between list view and grid view?",
      "answer": "To switch between list view and grid view, click on the view toggle icon located above the file list. Choose either list view or grid view."
    },
    {
      "id": 6,
      "question": "How do I check my storage usage?",
      "answer": "To check your storage usage, look at the 'Storage' section at the bottom of the left sidebar. It shows the amount of storage used and the total storage available."
    },
    {
      "id": 7,
      "question": "How do I change the theme to dark mode?",
      "answer": "To change the theme to dark mode, click on the settings icon at the top right corner, select 'Dark Mode', and your theme will switch to dark mode."
    },
    {
      "id": 8,
      "question": "How do I log out of my account?",
      "answer": "To log out of your account, click on your profile picture at the top right corner and select 'Log Out'."
    },
    {
      "id": 9,
      "question": "How do I search for a specific file?",
      "answer": "To search for a specific file, use the search bar at the top of the page. Type in the name or keyword related to the file you are looking for."
    },
    
  ] 
const Chatbot = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  }

  const handleQuestionSelect = (question) => {
    setSelectedQuestion(question);
    setCurrentStep(2);
  };

  const handleResolution = (response) => {
    if (response === "yes") {
      setCurrentStep(1);
      setSelectedQuestion(null);
      setOpen(false);
    } else {
      setCurrentStep(1);
      setSelectedQuestion(null);
    }
  };

  return (
    <>
      <Modal open={open} onClose={onClose}>
        <Box 
          sx={{ 
            position: 'absolute', 
            bottom: '5%', 
            right: '3%', 
            width: 400, 
            height: 400,
            bgcolor: 'background.paper', 
            boxShadow: 24, 
            p: 4, 
            borderRadius: 2, 
            overflow:'scroll',
          }}
        >
          {currentStep === 1 && (
            <div>
              <button 
        className="flex justify-center w-full move"   >
        <img src={chatbot} alt="" className='w-40' />
      </button>
              <ul>
                {questions.map(q => (
                  <li key={q.id} className="mb-2">
                    <button 
                      className="text-blue-600 hover:underline focus:outline-none"
                      onClick={() => handleQuestionSelect(q)}
                    >
                      {q.question}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {currentStep === 2 && selectedQuestion && (
            <div>
              <p className="text-lg font-semibold mb-2">{selectedQuestion.question}</p>
              <p className="mb-4">{selectedQuestion.answer}</p>
              <p className="mb-2">Was your query resolved?</p>
              <div className="flex gap-2">
                <button 
                  className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600"
                  onClick={() => handleResolution("yes")}
                >
                  Yes
                </button>
                <button 
                  className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600"
                  onClick={() => handleResolution("no")}
                >
                  No
                </button>
              </div>
            </div>
          )}
        </Box>
      </Modal>
      <button 
        className="fixed bottom-4 right-4 p-4 w-40 move" 
        onClick={() => setOpen(true)}
      >
        <img src={chatbot} alt="" className='w-full' />
      </button>
    </>
  );
};

export default Chatbot;
