# Description
Social Network for Developers

# Demo
[Dev-Social Demo](https://floating-dawn-06918.herokuapp.com/)

## Quick Start

```
# added default.json file in config folder
  {
    "mongoURI": "",
    "jwtSecret": "",
    "githubClientId": "",
    "githubSecret": ""
  }

# this file is located in config/default.json

# add uri of your mongodb connection for example

 "mongoURI": "mongodb://localhost/dev-social",
 
```

```bash
# Install server dependencies
npm install

# Install client dependencies
cd client
npm install

# Run both Express & React from root
npm run dev

# Build for production
cd client
npm run build
```
