# Express Contact Server

This project is an Express.js server that captures contact form data from a frontend application, processes it, and sends it via email. The email is formatted in a clean and professional manner using HTML and CSS for improved readability. The project follows best practices for security and error handling.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/express-contact-server.git
   ```

2. Navigate to the project directory:
   ```
   cd express-contact-server
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your email service credentials:
   ```
   EMAIL_USER=your_email@example.com
   EMAIL_PASS=your_email_password
   ```

## Usage

1. Start the server:
   ```
   npm start
   ```

2. The server will run on `http://localhost:3000`. You can send a POST request to `/contact` with the contact form data.

## Project Structure

```
express-contact-server
├── src
│   ├── app.ts                  # Entry point of the application
│   ├── routes
│   │   └── contact.ts          # Routes for contact form
│   ├── controllers
│   │   └── contactController.ts # Logic for handling contact form submissions
│   ├── services
│   │   └── emailService.ts      # Service for sending emails
│   ├── middlewares
│   │   └── errorHandler.ts      # Middleware for error handling
│   ├── utils
│   │   └── validateInput.ts     # Utility for input validation
│   └── types
│       └── index.ts            # Type definitions
├── package.json                 # NPM configuration
├── tsconfig.json                # TypeScript configuration
├── .env                         # Environment variables
└── README.md                    # Project documentation
```

## Technologies Used

- **Node.js**: JavaScript runtime for building the server.
- **Express**: Web framework for Node.js.
- **Nodemailer**: Module for sending emails.
- **TypeScript**: Superset of JavaScript for type safety.
- **dotenv**: Module for loading environment variables.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.