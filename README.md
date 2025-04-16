### TEAM NAME : DATA GUARDIANS

🥗 FoodShare - Connect Aid
FoodShare - Connect Aid is a full-stack web platform that bridges the gap between food donors and individuals or organizations in need. The application enables real-time listing and claiming of surplus food to reduce waste and support communities.

📦 **CORE FUNCTIONALITY**

👤 **User Auth**
Sign Up: Creates a new user with hashed password
Login: Verifies password hash and creates session
Logout: Ends user session

🥘 **Donations**
Create: Users post food items with location and expiry
View: Anyone can browse active food listings
Delete: Only the original donor can delete their own post

🧪 **DEVELOPMENT SETUP**
Prerequisites
Node.js
MongoDB (local or cloud like MongoDB Atlas)

**Setup**
```javascript
git clone https://github.com/your-username/foodshare-connect-aid.git
cd foodshare-connect-aid
npm install
```
**Create .env file:**
```javascript
MONGO_URI=mongodb://localhost:27017/foodshare
SESSION_SECRET=yourSecretKey
PORT=3000
```
**Run App**
```javascript
npm start
```

🔧 **KEY DATABASE OPERATIONS**
**User Authentication**
Registration: Inserts a new user with a bcrypt-hashed password into the MongoDB users collection.

Login: Queries the users collection by email/username and verifies the password hash using bcrypt.

**Food Donation Management**
Create: Inserts a new donation document tied to the user’s ID.

Read: Fetches available donations, filtered by expiration date and availability.
Delete: Removes donation entries; only the donor can delete their posts.

🛡️ **DATA SECURITY MEASURES**
**User Authentication**: Session-based authentication via express-session.

**Password Security**: All passwords are hashed using bcrypt before being saved.

**Data Isolation**: Users can only modify and access their own data, enforced via user ID checks.

**Input Validation**: Server-side validation to ensure clean and accurate data entries.

**MongoDB Injection Prevention**: All database interactions use Mongoose methods, which protect against injection attacks by default.

🚀 **DATABASE PERFOEMANCE CONSIDERATIONS**
**Indexing**: MongoDB automatically indexes _id, and additional indexes can be added for userId, expiryDate, etc., for faster queries.

**Query Optimization**: Filters and projections are used to fetch only the necessary data (e.g., donations not yet expired).

**Transaction Management**: Although MongoDB supports multi-document transactions, single-document atomicity is sufficient for most operations here.

🌐 **Full Stack Web Development Aspects**
This project demonstrates key components of full-stack web development:

**Frontend**
EJS Templates: Used for dynamic server-side rendering.

CSS: Handles layout and styling across devices.

JavaScript: Adds interactivity for features like form validation and listing filters.

**Backend**
Node.js: Runtime environment used for server-side logic.

Express.js: Web framework to handle routes, middleware, and API responses.

RESTful API: Follows standard HTTP verbs for resource CRUD operations.

Middleware: Manages authentication, route access, and error handling.

**Data Management**
MongoDB: NoSQL database for flexible and scalable data storage.

Mongoose: ODM used to model application data and enforce schema rules.

🔐 **AUTHENTICATION & SECURITY**
**Session Management**: Users stay logged in using cookie-based sessions.

**Password Hashing**: User passwords are securely hashed with bcrypt.

**Access Control**: Route guards ensure only authenticated users can post or delete data.

📲 **APPLICATION FEATURES**
**Food Listing**: Users can donate food with title, description, quantity, and location.

**Claim Requests**: Users in need can request donations.

**Expiration Tracking**: Donations include an expiry date to keep listings fresh.

**User Dashboard** Donors and recipients can view their activity and status updates.

🧪 **DEVELOPMENT WORKFLOW**
To work with the database in this project:

**Setup MongoDB**: Use MongoDB locally or with a service like MongoDB Atlas.

**Configure Connection**: Update MongoDB URI in your .env file (e.g., MONGO_URI=mongodb://localhost:27017/foodshare).

**Run Application**: Start the app with npm start; the required collections will be created automatically upon first interaction.

**Database Maintenance**: Use MongoDB Compass or CLI tools for data inspection and maintenance.

🧑‍🤝‍🧑 **Team Branding**
The footer displays "Tikey", representing our team and commitment to social good through technology.

This project is designed with scalability, security, and maintainability in mind, making it easy to expand or adapt for other aid-sharing use cases like clothing, shelter, or community events.



