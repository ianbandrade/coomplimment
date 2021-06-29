<div align="center">
  <img width="120px" alt="Logo" src="./assets/logo.png"/>
  <br>
  <h2>Coomplimment</h2>
</div>

<div align="center">
  <a href="#about">About</a>
   &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#techs">Techs</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#run">Run</a>
&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#features">Features</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#license">License</a>
</div>

## About

**Coomplimment** is a feedback back-end application. This was created based on _NLW Together_, of Rocketseat.

## Techs

- Node.JS `v14.17.0`
- TypeScript `v4.3.2`
- SQLite database

## Run

### Clone the repository

```bash
# Clone Repository
$ git clone https://github.com/ianbandrade/coomplimment.git
```

### Run Server

```bash
# Go to folder
$ cd coomplimment

# Install the dependencies
$ yarn install

# Run migrations
$ yarn typeorm migrations:run

# Start the server
$ yarn dev
```

The console going to show the result

## Features

- User Login
- Send compliments
- User (as admin) can create a tag
- Users compliments (received)
- Users compliments (sent)

## License

This project is under the MIT license. See the file [LICENSE](LICENSE) for more details.
