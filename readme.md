# Automated Doctor-Patient Handling System 🏥

This project is a web-based application designed to streamline the process of booking appointments with doctors. It was developed as a college project by Abhimanyu Payasi, Ankit Kumar, Manish Kumar, and Rahul. Our aim is to reduce time wastage and make the process of scheduling appointments more efficient. 💡

## Features 🚀
# .gitignore

- Web-based application: Accessible from any device with a web browser. 🌐
- Easy appointment booking: Patients can book appointments without any hassle. 📅

## Getting Started 🏁

Follow these steps to get the project up and running on your local machine:

1. Clone the repository: 📂
    ```bash 
    git clone https://github.com/Abhimanyupayasi/Automated-System.git 
    ```

2. Rename the `.example.env` file to `.env` and fill in your own credentials: 🔐Edit the `.env` file and replace the placeholder values with your actual data.
    
    ```bash
    PORT=3000
    MONGO_URI = 'your MONGO_URI/ URL'
    SECRET_KEY = 'Your SECRET_KEY'
    CLIENT_URL = 'Your Client Url'
    JWT_SECRET = ' Your JWT Secret'
    ```

3. Navigate to the server directory: 📁
```bash
cd server
```
4. Start the server: 🖥️After running this command, the server will start on port 3000.
```bash
npm run start
```

5. Open a web browser and navigate to `http://localhost:3000` to see the application in action. 🌐

6. To stop the server, press `Ctrl + C` in the terminal. 🛑

## Access the Admin Panel 🛠️
1. To access the admin panel, signup with any email & password in your web browser. 🌐

2. Go in the mongodb database and change the role of the user to admin. 🛠️

3. Now you can access the admin panel by logging in with the same email & password. 🌐

## Folder Structure 📁

The project is divided into two main directories: `client` and `server`.
you can run all the backend & frontend code in the server directory because we are using ejs.

```bash
Automated-System
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── public
│   ├── routes
│   ├── views
│   ├── .env
│   ├── .gitignore
│   ├── app.js
│   ├── package-lock.json
│   └── package.json
├── client
│   ├── Some HTML files
│   ├── Some CSS files
│   ├── Some JS files
│   ├── .gitignore
│   ├── index.html
│   └── README.md
└── README.md
```

## Database Schema 📊

The database schema consists of two collections: `users` and `appointments`.

### Users Collection 🧑

The `users` collection stores information about the users of the application. It has the following fields:

- `name`: The name of the user.
- `email`: The email address of the user.
- `password`: The hashed password of the user.
- `role`: The role of the user (either `user` or `admin`).

### Appointments Collection 📅

The `appointments` collection stores information about the appointments booked by the users. It has the following fields:

- `name`: The name of the patient.
- `email`: The email address of the patient.
- `phone`: The phone number of the patient.
- `date`: The date of the appointment.
- `time`: The time of the appointment.

## Tech Stack 💻

- Frontend: HTML, CSS, JavaScript, Tailwind CSS
- Backend: Node.js, Express.js , MongoDB , ejs

### Additional Libraries and Tools 🛠️

- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for quickly building custom designs.
- [Mongoose](https://mongoosejs.com/): A MongoDB object modeling tool designed to work in an asynchronous environment.
- [bcrypt](https://www.npmjs.com/package/bcrypt): A library for hashing passwords.
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken): An implementation of JSON Web Tokens.
- [dotenv](https://www.npmjs.com/package/dotenv): A zero-dependency module that loads environment variables from a `.env` file into `process.env`.
- [nodemon](https://www.npmjs.com/package/nodemon): A utility that automatically restarts the server when changes are detected.
- [html, css , javascript](https://developer.mozilla.org/en-US/docs/Web/HTML): The standard markup language for creating web pages and web applications.
- [ejs](https://ejs.co/): A simple templating language that lets you generate HTML markup with plain JavaScript.
-[morgan](https://www.npmjs.com/package/morgan): HTTP request logger middleware for node.js

## Contributors 👥

- Abhimanyu Payasi
- Ankit Kumar
- Manish Kumar
- Rahul Kumar

We hope you find our project useful. If you have any questions or feedback, please feel free to contact us. 📧