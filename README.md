# Social Networking API

## Description

This is an API for a social networking platform that allows users to perform various actions including creating, getting, updating, and deleting users, creating, getting, updating, and deleting thoughts attached to users, creating and deleting friends that are attached to users, and creating and removing reactions that are attached to thoughts.

## Technologies

The API is built using Node.js, Express, and MongoDB.

## Getting Started

To get started, you'll need to have Node.js and MongoDB installed on your local machine. Then, follow these steps:

Clone the repository to your local machine.
Run npm install to install the necessary dependencies.
Create a .env file and add your MongoDB connection string as MONGODB_URI.
Run npm start to start the server.

[Walkthrough Video](Video/2023-03-15%2012-11-03.mp4)

## Endpoints

The following endpoints are available:

### Users

GET /users: Get a list of all users.
GET /users/:id: Get a specific user by ID.
POST /users: Create a new user.
PUT /users/:id: Update an existing user.
DELETE /users/:id: Delete a user by ID.

### Thoughts

GET /thoughts: Get a list of all thoughts.
GET /thoughts/:id: Get a specific thought by ID.
POST /thoughts: Create a new thought.
PUT /thoughts/:id: Update an existing thought.
DELETE /thoughts/:id: Delete a thought by ID.

### Friends

POST /users/:userId/friends: Add a friend to a user.
DELETE /users/:userId/friends/:friendId: Remove a friend from a user.

### Reactions

POST /thoughts/:thoughtId/reactions: Add a reaction to a thought.
DELETE /thoughts/:thoughtId/reactions/:reactionId: Remove a reaction from a thought.

## Data Models

The following data models are used in the API:

### User

username (string): The username of the user.
email (string): The email address of the user.
thoughts (array of Thought IDs): The thoughts created by the user.
friends (array of User IDs): The friends of the user.

### Thought

thoughtText (string): The text of the thought.
createdAt (timestamp): The timestamp when the thought was created.
username (string): The username of the user who created the thought.
reactions (array of Reaction objects): The reactions to the thought.

### Reaction

reactionBody (string): The text of the reaction.
username (string): The username of the user who created the reaction.

## Conclusion

This API provides basic functionality for a social networking platform. With these endpoints, users can create, get, update, and delete users, thoughts, friends, and reactions. If you have any questions or suggestions, feel free to reach out!

## License

This project is licensed under the MIT License. See the LICENSE file for details.
