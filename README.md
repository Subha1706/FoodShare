# 🥗 FoodShare – Connect Aid

**Team Name: Data Guardians**

FoodShare – Connect Aid is a full-stack web application designed to connect **food donors with individuals or organizations in need**. The platform allows registered users to list surplus food and enables other users to view available donations and submit claim requests.

The main objective of the project is to reduce food wastage by providing a digital platform through which surplus food can be made available to people who need it.

The application is built using **React.js for the frontend, Node.js and Express.js for the backend, and MongoDB with Mongoose for data storage**.

---

## 📦 CORE FUNCTIONALITY

### 👤 User Authentication

* **Sign Up:** Users can create an account by providing their required details. Passwords are hashed using bcrypt before being stored in the database.
* **Login:** Users can log in using their credentials. The server verifies the stored password hash before creating an authenticated session.
* **Logout:** Users can securely log out, which terminates their active session.
* **Access Control:** Certain operations, such as creating or deleting donations, are restricted to authenticated users.

### 🥘 Food Donation Management

* **Create Donation:** Registered users can create food donation listings by providing information such as title, description, quantity, and expiry date.
* **View Donations:** Users can browse the available food donation listings.
* **Update/Delete:** The original donor can manage their own donation listings.
* **Expiry Tracking:** Each donation contains an expiry date, allowing the application to distinguish between available and expired food items.

### 📲 Claim Requests

Users who require food can submit requests for available donations. The application stores the relevant claim information and allows users to track the status of their requests.

### 📊 User Dashboard

The dashboard provides users with information related to their activity, such as:

* Food donations created by the user
* Donation status
* Claim requests
* Relevant activity and updates

---

# 🏗️ TECHNOLOGY STACK

### Frontend

* **React.js** – Component-based frontend development
* **JavaScript** – Application logic and interactivity
* **HTML/CSS** – Structure and styling
* **React components** – Reusable UI elements and application views

### Backend

* **Node.js** – JavaScript runtime environment for server-side development
* **Express.js** – Backend framework for routing, middleware, authentication, and request handling

### Database

* **MongoDB** – NoSQL database for storing users, donations, and claim-related information
* **Mongoose** – ODM used to define schemas and interact with MongoDB

### Security

* **bcrypt** – Password hashing
* **express-session** – Session-based authentication
* **Environment variables** – Used to store configuration and sensitive values

---

# 🔧 DEVELOPMENT SETUP

## Prerequisites

The following software is required:

* Node.js
* MongoDB, either locally or through a cloud service such as MongoDB Atlas
* npm

## Installation

```bash
git clone https://github.com/your-username/foodshare-connect-aid.git
cd foodshare-connect-aid
npm install
```

## Environment Configuration

Create a `.env` file containing the required configuration:

```env
MONGO_URI=mongodb://localhost:27017/foodshare
SESSION_SECRET=yourSecretKey
PORT=3000
```

The actual values should be configured according to the development environment.

## Running the Application

```bash
npm start
```

The application can then be accessed through the configured local server.

---

# 🔧 DATABASE OPERATIONS

## 👤 User Management

### Registration

When a user registers:

1. The application receives the user's registration details.
2. The password is hashed using bcrypt.
3. The user information is stored in the MongoDB `users` collection.
4. The plain-text password is never stored in the database.

### Login

During login:

1. The user submits their credentials.
2. The backend searches for the corresponding user.
3. bcrypt compares the entered password with the stored password hash.
4. If the credentials are valid, an authenticated session is created.

---

# 🥘 FOOD DONATION MANAGEMENT

### Create

A registered user can create a donation by submitting details such as:

* Food title
* Description
* Quantity
* Expiry date
* Other relevant donation information

The donation is stored in MongoDB and associated with the user who created it.

### Read

The application retrieves available donation records from MongoDB and displays them through the React frontend.

Expired or unavailable donations can be filtered based on their status and expiry information.

### Update

Where implemented, the donor can modify the details of their own donation.

### Delete

A donor can delete their own donation. The backend verifies the user's identity before performing the deletion.

---

# 🛡️ DATA SECURITY

## Authentication

The application uses **session-based authentication** to maintain the user's login state.

## Password Security

Passwords are never stored directly. They are hashed using **bcrypt** before being stored in MongoDB.

## Authorization

The backend verifies the authenticated user's ID before allowing operations such as modifying or deleting their own donations.

For example, a user should not be able to delete another user's donation simply by changing an ID in the request.

## Input Validation

Server-side validation is used to verify submitted data before it is stored or processed.

## Environment Variables

Sensitive configuration information such as database connection strings and session secrets is stored using environment variables rather than being hard-coded into the application.

## MongoDB Security

Database operations are performed through Mongoose models and validated application inputs to reduce the risk of malformed or unsafe database queries.

---

# 🚀 DATABASE PERFORMANCE

## Indexing

MongoDB automatically indexes the `_id` field. Additional indexes can be created for frequently queried fields such as:

* `userId`
* `expiryDate`
* `status`

This can improve query performance as the amount of data increases.

## Query Optimization

The application can retrieve only the required donation records instead of unnecessarily loading unrelated data.

For example, donation queries can filter records based on availability and expiry status.

## Atomic Operations

MongoDB provides atomicity at the individual document level. Since many operations in the application involve modifying individual documents, single-document atomic operations are sufficient for these use cases.

---

# 🌐 FULL-STACK WEB DEVELOPMENT

The project demonstrates the integration of a modern frontend with a backend server and database.

## 🎨 Frontend – React.js

React.js is used to build the user interface.

The frontend is responsible for:

* User registration and login interfaces
* Donation creation forms
* Displaying available donations
* Claim request interfaces
* User dashboard
* Form validation and user interaction
* Sending requests to the backend

React's component-based architecture allows different parts of the application to be developed as reusable components.

## ⚙️ Backend – Node.js and Express.js

Node.js provides the runtime environment for executing JavaScript on the server.

Express.js is used to:

* Define application routes
* Handle HTTP requests and responses
* Implement middleware
* Manage authentication
* Validate requests
* Communicate with MongoDB
* Implement access control
* Handle errors

## 🗄️ Database – MongoDB

MongoDB is used as the application's database.

It stores information such as:

* User accounts
* Food donations
* Claim requests
* Donation status
* Other application-related records

Mongoose provides schemas and models that make it easier for the Node.js backend to interact with MongoDB.

---

# 🔄 APPLICATION FLOW

A typical donation flow works as follows:

```text
User
  ↓
React.js Frontend
  ↓
HTTP Request
  ↓
Node.js + Express.js Backend
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
  ↓
Updated UI
```

For example, when a user creates a donation:

```text
User fills donation form
        ↓
React.js sends request
        ↓
Express.js receives request
        ↓
Authentication is verified
        ↓
Input is validated
        ↓
Mongoose creates donation document
        ↓
MongoDB stores the donation
        ↓
Backend sends response
        ↓
React.js updates the interface
```

---

# 🔐 AUTHENTICATION AND ACCESS CONTROL

### Session Management

The application uses **express-session** to maintain authenticated user sessions.

After successful login, the server creates a session associated with the authenticated user.

### Password Hashing

bcrypt is used to hash passwords before storing them in MongoDB.

### Route Protection

Protected routes require authentication before users can perform operations such as:

* Creating donations
* Managing their donations
* Submitting or managing relevant requests

### Ownership Verification

For operations involving a user's own data, the backend verifies the associated user ID before allowing modifications or deletion.

---

# 📱 APPLICATION FEATURES

### Food Donation Listings

Users can create and view food donation listings containing information such as:

* Food title
* Description
* Quantity
* Expiry date
* Availability/status

### Claim Requests

Users can request available food donations. The application maintains the relevant request information and status.

### Expiration Tracking

Each donation has an expiry date. This helps prevent expired food from continuing to appear as an available donation.

### User Dashboard

Users can view information related to their donations and claim requests from their dashboard.

### User-Based Data Management

Users can manage the data associated with their own accounts and donations according to their permissions.

---

# 🧪 DEVELOPMENT WORKFLOW

## 1. Set Up MongoDB

MongoDB can be run locally or through a service such as MongoDB Atlas.

## 2. Configure the Database

The MongoDB connection string is stored in the `.env` file:

```env
MONGO_URI=mongodb://localhost:27017/foodshare
```

## 3. Install Dependencies

```bash
npm install
```

## 4. Start the Application

```bash
npm start
```

## 5. Database Inspection

MongoDB Compass or MongoDB command-line tools can be used to inspect and manage the application's database during development.

---

# ⚠️ IMPORTANT PROJECT SCOPE

The current version of **FoodShare – Connect Aid does not use real-time data sharing or location-based services**.

The application does **not** depend on:

* Real-time food tracking
* Live location tracking
* GPS-based matching
* Google Maps
* Location-based donation recommendations

Instead, the application focuses on **food donation listing, browsing, claiming, authentication, expiry tracking, and user-based management**.

---

# 👥 TEAM

**Team Name:** Data Guardians

The project was developed with the goal of using technology to address food wastage and improve access to surplus food.

The application architecture can also be extended in the future to support other resource-sharing use cases, such as clothing, educational resources, or other community-support initiatives.
