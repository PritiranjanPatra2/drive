# Drive Clone Application

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
  - [Running the Application](#running-the-application)
  - [File Upload](#file-upload)
  - [File Management](#file-management)
  - [Search and Sorting](#search-and-sorting)
  - [Responsive Design](#responsive-design)
- [Project Structure](#project-structure)
- [Firebase Setup](#firebase-setup)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction
This project is a **Google Drive Clone** built with React.js, Firebase, and Material UI. The application allows users to upload, manage, and organize their files online. Users can log in using Firebase Authentication, upload files, and access them from anywhere. The app provides a user-friendly interface and responsive design, making it accessible on various devices.

## Features
- **User Authentication**: Secure user login using Firebase Authentication.
- **File Upload**: Upload files to Firebase Storage and store metadata in Firestore.
- **File Management**: View, download, and delete files with ease.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Search and Sort**: Quickly search and sort files by name or date.
- **Dark Mode and Light Mode**: Toggle between dark and light themes.

## Technologies Used
- **Frontend**: React.js, Tailwind CSS, Material UI
- **Backend**: Firebase (Authentication, Firestore, Storage)
- **State Management**: React Context API
- **Icons**: Material UI Icons
- **Notifications**: React Toastify
- **Version Control**: Git

## Installation

### Prerequisites
- **Node.js** (>= 12.x)
- **npm** (>= 6.x) or **yarn** (>= 1.x)
- **Firebase Account**

### Steps
1. **Clone the Repository**
   ```bash
   git clone https://github.com/PritiranjanPatra2/drive.git
   cd drive-clone
2. **Install Dependencies**
   ``` bash
     npm install
    # or
    yarn install
3. ** Firebase Setup **

 - Create a Firebase project at Firebase Console.
- Enable Authentication, Firestore, and Storage.
- Set up Firebase credentials and configuration (details in the Firebase Setup section).
4. ** Environment Variables **

- Create a .env file in the root directory and add your Firebase configuration. See Environment Variables for more details.
# File Upload

- **Click the "New" button** in the sidebar to upload files.
- **Select the file** you want to upload and click "Upload."
- Uploaded files will appear in your "Home" view.

# File Management

- **View Files**: Files are displayed in either list or grid view. Toggle between views using the icons in the header.
- **Delete Files**: Click the delete icon next to a file to remove it from storage.
- **Copy URL**: Click the copy icon to copy the file's URL to your clipboard.

# Search and Sorting

- **Search**: Use the search bar in the header to find files by name.
- **Sorting**: Click the sort icon in the header to sort files by name or date in ascending or descending order.

# Responsive Design

The application is fully responsive and adjusts its layout based on the screen size, providing an optimal experience on both mobile and desktop devices.
# Project Structure
drive-clone/
├── public/
│   ├── index.html
├── src/
│   ├── assets/               # Static assets like images
│   ├── components/           # Reusable components like Header, Sidebar, etc.
│   ├── contexts/             # Context API files for state management
│   ├── firebase/             # Firebase configuration and initialization
│   ├── pages/                # Page components like Home, Drive, etc.
│   ├── App.js                # Main application component
│   ├── index.js              # Entry point for React
│   └── styles/               # Tailwind CSS and custom styles
├── .env                      # Environment variables (not included in repo)
├── .gitignore                # Files to be ignored by Git
├── README.md                 # This README file
├── package.json              # Project dependencies and scripts
└── yarn.lock                 # Dependency lock file
# Firebase Setup

## Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/) and create a new project.

## Enable Authentication

1. Navigate to the **Authentication** section.
2. Click **"Get Started"** and choose the **"Email/Password"** sign-in method.

## Create a Firestore Database

1. Go to **Firestore** in your Firebase project.
2. Create a new database.

## Set Up Storage

1. Navigate to the **Storage** section.
2. Set up your Firebase Storage.

## Get Firebase Config

1. In the project settings, under **"General,"** find your Firebase SDK configuration.
2. Copy the config object.
# Environment Variables
Create a .env file in the root directory and add the following:
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
# Contributing

1. **Fork the repository.**
2. **Create a new branch** (`git checkout -b feature-branch`).
3. **Commit your changes** (`git commit -m 'Add some feature'`).
4. **Push to the branch** (`git push origin feature-branch`).
5. **Open a Pull Request.**

