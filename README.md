# dev-social
Social Network for Developers

# Demo
[Dev-Social Demo](https://floating-dawn-06918.herokuapp.com/)

## Quick Start

```
# added default.json file in config folder

```
  "mongoURI": "mongodb+srv://losk773:losk773@cluster0-3wiig.mongodb.net/dev_social retryWrites=true&w=majority",
  "jwtSecret": "mysecrettoken",
  "githubClientId": "abced26dbf5c4e84338e",
  "githubSecret": "64a7c3f53a39e2afdff3f6bc83206202658051ab"
```

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