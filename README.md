# 🥗 FoodShare – Connect Aid

**Team Name: Data Guardians**

FoodShare – Connect Aid is a **MERN-based full-stack web application** that connects food donors with individuals and organizations in need. Registered users can list surplus food, browse available donations, and submit claim requests.

The project aims to reduce food wastage by making surplus food accessible to people who need it.

---

## 🚀 Features

### 👤 User Authentication

* User registration and login
* Secure password hashing using **bcrypt**
* Session-based authentication
* Protected routes and access control
* User-specific data management

### 🥘 Food Donation Management

* Create food donation listings
* View available donations
* Update and delete own listings
* Track food expiry dates
* Manage donation availability/status

### 📲 Claim Requests

* Submit requests for available food donations
* Store and manage claim request information
* Track request status

### 📊 User Dashboard

* View created donations
* View donation status
* View claim requests
* Access relevant user activity

---

## 🛠️ Technology Stack

### Frontend

* **React.js**
* **JavaScript**
* **HTML/CSS**

### Backend

* **Node.js**
* **Express.js**

### Database

* **MongoDB**
* **Mongoose**

### Security & Configuration

* **bcrypt** for password hashing
* **express-session** for session management
* **Environment variables** for sensitive configuration

---

## 📁 Project Structure

```text
FoodShare-Connect-Aid/
│
├── frontend/
│   ├── components/
│   ├── pages/
│   └── ...
│
├── backend/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   └── ...
│
├── .env
├── package.json
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites

Make sure the following are installed:

* [Node.js](https://nodejs.org/)
* npm
* MongoDB or MongoDB Atlas

### Installation

Clone the repository:

```bash
git clone https://github.com/Subha1706/FoodShare.git
cd FoodShare
```

Install dependencies:

```bash
npm install
```

### Environment Configuration

Create a `.env` file and add the required configuration:

```env
MONGO_URI=mongodb://localhost:27017/foodshare
SESSION_SECRET=yourSecretKey
PORT=3000
```

Configure the values according to your local environment.

### Run the Application

```bash
npm start
```

The application will run on the configured local server.

---

## 🏗️ Application Architecture

The application follows a **client-server architecture**:

```text
React.js Frontend
        ↓
   HTTP Request
        ↓
Node.js + Express.js
        ↓
 Authentication / Validation
        ↓
     Mongoose
        ↓
      MongoDB
        ↓
     Response
        ↓
React.js Frontend
```

### Frontend

React.js handles the user interface, forms, donation listings, claim requests, dashboard, and communication with the backend.

### Backend

Node.js and Express.js handle routing, authentication, validation, business logic, error handling, and database communication.

### Database

MongoDB stores user accounts, food donations, claim requests, and related application data. Mongoose is used for schemas and database interaction.

---

## 🔐 Security

* Passwords are hashed using **bcrypt** before being stored.
* Authentication is handled using **express-session**.
* Protected operations require an authenticated user.
* Users can modify or delete only their own donation data.
* Server-side input validation is used before processing submitted data.
* Sensitive configuration such as database credentials and session secrets is stored in environment variables.

---

## 📌 Data Management

The application manages three main types of data:

| Data           | Purpose                                                    |
| -------------- | ---------------------------------------------------------- |
| Users          | Stores registered user information                         |
| Donations      | Stores food listings, quantities, expiry dates, and status |
| Claim Requests | Stores requests made for available donations               |

MongoDB indexes can be used on frequently queried fields such as `userId`, `expiryDate`, and `status` as the dataset grows.

---

## 🔄 How It Works

A typical donation process follows these steps:

```text
User
  ↓
Creates Food Donation
  ↓
React.js sends request
  ↓
Express.js validates request
  ↓
Authentication is verified
  ↓
MongoDB stores donation
  ↓
Available donation displayed
  ↓
Another user submits claim request
  ↓
Request information is stored
```

---

## 🔮 Future Developments

The project can be extended with additional features such as:

* Real-time donation updates
* Location-based food discovery
* GPS-based donor and recipient matching
* Google Maps integration
* Notifications for new donations and claim requests
* More advanced donation tracking
* Expansion to other resource-sharing use cases such as clothing and educational resources

---

## ⚠️ Current Scope

The current version focuses on:

* Food donation listings
* Donation browsing
* Claim requests
* Authentication
* Expiry tracking
* User-based data management

It currently **does not implement real-time data sharing, GPS tracking, Google Maps, or location-based recommendations**.

---

## 👥 Team

**Data Guardians**

FoodShare – Connect Aid was developed as a technology-driven solution to help reduce food wastage and improve access to surplus food.
