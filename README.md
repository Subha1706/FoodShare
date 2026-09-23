# 🥗 FoodShare – Connect Aid

**FoodShare – Connect Aid** is a MERN-based full-stack web application that connects food donors with individuals and organizations in need. Users can create and manage food donation listings, browse available food, and submit claim requests.

The platform aims to reduce food wastage by making surplus food more accessible to those who need it.

---

## ✨ Features

* **User Authentication** – Secure registration, login, logout, and session management.
* **Food Donations** – Create, view, update, and delete food donation listings.
* **Expiry Tracking** – Manage donation expiry dates and availability.
* **Claim Requests** – Submit and manage requests for available food donations.
* **User Dashboard** – View personal donations, requests, and activity.
* **Access Control** – Restrict donation management operations to authorized users.

---

## 🛠️ Tech Stack

| Category       | Technologies                    |
| -------------- | ------------------------------- |
| Frontend       | React.js, JavaScript, HTML, CSS |
| Backend        | Node.js, Express.js             |
| Database       | MongoDB, Mongoose               |
| Authentication | express-session, bcrypt         |
| Tools          | Git, GitHub, VS Code            |

---

## 🏗️ Architecture

```text
┌─────────────────────┐
│    React.js         │
│     Frontend        │
└──────────┬──────────┘
           │
           │ HTTP Requests
           ▼
┌─────────────────────┐
│  Node.js + Express  │
│      Backend        │
└──────────┬──────────┘
           │
           │ Mongoose
           ▼
┌─────────────────────┐
│      MongoDB        │
│      Database       │
└─────────────────────┘
```

### Frontend

React.js provides the user interface for authentication, food listings, donation management, claim requests, and the user dashboard.

### Backend

Node.js and Express.js handle API routes, authentication, validation, business logic, and communication with the database.

### Database

MongoDB stores user, donation, and claim request data, with Mongoose providing schema definitions and database interaction.

---

## 🔐 Security

* Passwords are securely hashed using **bcrypt**.
* User sessions are managed using **express-session**.
* Protected routes require user authentication.
* Donation operations are restricted based on user ownership.
* Server-side input validation is applied to submitted data.
* Sensitive configuration is managed using environment variables.

---

## 📂 Data Model

The application manages three primary data entities:

### User

Stores registered user information and authentication details.

### Donation

Stores food information including:

* Food title
* Description
* Quantity
* Expiry date
* Availability/status
* Donor information

### Claim Request

Stores information related to users requesting available food donations and the corresponding request status.

---

## 🔄 Application Flow

```text
User
  ↓
React.js Frontend
  ↓
HTTP Request
  ↓
Express.js Backend
  ↓
Authentication & Validation
  ↓
Mongoose
  ↓
MongoDB
  ↓
Response
  ↓
React.js Frontend
  ↓
Updated Interface
```

### Donation Flow

```text
Create Donation
      ↓
Validate User
      ↓
Validate Data
      ↓
Store Donation
      ↓
Display Available Donation
      ↓
Submit Claim Request
      ↓
Track Request Status
```

---

## ⚙️ Getting Started

### Prerequisites

* Node.js
* npm
* MongoDB / MongoDB Atlas

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

### Environment Variables

Create a `.env` file:

```env
MONGO_URI=mongodb://localhost:27017/foodshare
SESSION_SECRET=yourSecretKey
PORT=3000
```

Update the values according to your environment.

### Run the Application

```bash
npm start
```

---

## 📁 Project Structure

```text
FoodShare/
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

## 🚀 Future Developments

* Real-time donation updates
* Location-based food discovery
* GPS-based donor and recipient matching
* Notification system
* Enhanced donation tracking
* Expansion to other community resource-sharing use cases

---

## 👥 Team

**Data Guardians**
