# Healthcare Service App Setup Guide

This guide will help you set up and run the Healthcare Service App on your local machine.

## Prerequisites

- Node.js and npm should be installed on your machine. You can download them from [here](https://nodejs.org/).

## Setup Instructions

1. **Clone the Repository**

   First, clone the repository to your local machine using the following command:

   ```bash
   git clone <repository-url>
   cd healthcare-service-app
   ```

2. **Create a `.env` File**

   In the root directory of the project, create a `.env` file. This file will hold your environment variables. Add the following lines to the `.env` file:

   ```
   DB_URL=your_database_url_here
   PORT=your_port_number_here
   ```

   Replace `your_database_url_here` with the URL of your database and `your_port_number_here` with the desired port number.

3. **Install Dependencies**

   Run the following command to install all necessary dependencies:

   ```bash
   npm install
   ```

4. **Run the Application**

   Start the development server with the following command:

   ```bash
   npm run dev
   ```

5. **Additional Information**

   - Ensure your database server is running and accessible with the provided `DB_URL`.
   - The application will be live on the port you specified in the `.env` file (default is 3000 if not specified).

You can now use and modify the Healthcare Service App as per your needs. Happy coding!

