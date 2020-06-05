# Live Art Backend API
Backend RESTful API for Live Art, serving up endpoints relating to storing artist data, logging in, and fetching artist data.
Endpoints available: 
- GET /artist
- POST /artist
- POST /artist/:username


## Getting Started & Installation
  ### Prerequisites

  To run this API on your machine, you will need Node.js and MongoDB installed on your machine.

  To install Mongo, go to https://docs.mongodb.com/manual/installation/

  To install Node, go to: https://nodejs.org/en/download/ \
  The version required is a minimum of v. 13.8.0

  ### Installation
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

1. Clone a copy of the repository on your machine using the below command:

```javascript
git clone https://github.com/katieraby/live-art-backend.git
```

2. Install the required dependencies:

```javascript
npm install
```

3. For testing, install the required dev dependencies:
```javascript
npm i -D mocha chai supertest
```

  ### How to create your dbConfig (required)
  
  To connect to your live mongo database, ensure you set up a config file with your credentials. 
  An example set-up of the file is below (don't forget to gitignore!):
  
  ```javascript
const mongoUsername = "yourmongousername";
const mongoPassword = "yourmongopassword";
module.exports = { mongoUsername, mongoPassword };
```

## Running the Tests

To run the tests written for the API during the TDD process (including tests for error handling), run the following command:
```javascript
npm run test
```

## Built With

- [Node](https://nodejs.org/en/)
- [Mongoose](https://mongoosejs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Express](https://expressjs.com/)

