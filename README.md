# AgroSync

AgroSync is a platform that bridges the gap between farmers and consumers by enabling direct transactions through a Node.js-powered platform. It includes features like crop listing, direct purchasing, secure transactions via Stripe, chat support, and crop quality grading using machine learning.


## Features

- **Farmer Crop Listings**: Farmers can list their crops with detailed information.
- **Direct Purchases**: Consumers can directly purchase crops from farmers.
- **Secure Transactions**: Integrated Stripe for secure and easy payments.
- **Chat Functionality**: Real-time chat between users and farmers.
- **Chatbot**: Automated user support with a chatbot.
- **Machine Learning for Crop Grading**: Ensures the quality of listed crops.
- **Responsive Design**: User-friendly design using Tailwind CSS for responsiveness.

## Tech Stack

- **Frontend**: React.js, React Query, Redux, Tailwind CSS, Framer, React Spring
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Payment Integration**: Stripe
- **Machine Learning**: Crop grading system to ensure product quality
- **Real-Time Communication**: Chat functionality

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/agrosync.git
   cd agrosync
  cd client   # Navigate to the React frontend
 npm install # Install frontend dependencies

cd ../server  # Navigate to the Node.js backend
npm install   # Install backend dependencies

# Run backend
cd server
npm start

# Run frontend
cd client
npm start
