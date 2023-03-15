const names = [
  "Avery Johnson",
  "Samantha Williams",
  "Ethan Parker",
  "Olivia Nelson",
  "Lucas Brown",
  "Mia Patel",
  "Jackson Lee",
  "Isabella Chen",
  "Connor Davis",
  "Emily Kim",
  "Noah Nguyen",
  "Hannah Rodriguez",
  "Caleb Jackson",
  "Sophia Gupta",
  "Elijah Ali",
  "Chloe Jones",
  "Alexander Patel",
  "Aria Singh",
  "Gabriel Kim",
  "Lila Nguyen",
];

const emails = [
  "email@email.com",
  "differentemail@email.com",
  "jonedoe@email.com",
  "janedoe@email.com",
  "jacobdoe@email.com",
  "summerlover93@gmail.com",
  "technerd@gmail.com",
  "greeneyedbeauty@yahoo.com",
  "bookworm88@hotmail.com",
  "wanderlust123@gmail.com",
  "fitnessfreak@gmail.com",
  "fashionista99@yahoo.com",
  "musiclover23@hotmail.com",
  "foodie4life@gmail.com",
  "animallover7@yahoo.com",
  "artcollector99@hotmail.com",
  "beachbum123@gmail.com",
  "gamer4ever@yahoo.com",
  "sciencegeek88@hotmail.com",
  "adventurer23@gmail.com",
  "writer4life@yahoo.com",
  "partyanimal88@hotmail.com",
  "photographylover99@gmail.com",
  "dreamer123@yahoo.com",
  "historybuff88@hotmail.com",
];

const thoughtTexts = [
  "How to disagree with someone",
  "iPhone review",
  "how-to video",
  "video essay on the history of video games",
  "How to make money on the App Store",
  "Learn NextJS in five minutes (Not clickbate)",
  "Movie trailer",
  "Hello world",
  "Another possible solution to the algorithm",
  "Apology video",
  "Submission for startup pitch",
];

const possibleReactions = [
  "I disagree!",
  "I tried your algorithm, here were the results",
  "This was awesome",
  "Thank you for the great content",
  "Please check out my video response",
  "Like and subscribe to my channel please",
  "Reply: The side effects of in app purchases on digital marketplaces",
];

const users = [];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomName = () => `${getRandomArrItem(names)}`;

const getRandomEmail = () => `${getRandomArrItem(emails)}`;

// Function to generate random videos that we can add to the database. Includes video responses.
const getRandomThoughts = (int) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      thoughttext: getRandomArrItem(thoughtTexts),
      username: getRandomName(),
      reactions: [...getThoughtReactions(3)],
    });
  }
  return results;
};

// Create the responses that will be added to each video
const getThoughtReactions = (int) => {
  if (int === 1) {
    return getRandomArrItem(possibleReactions);
  }
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      reactionBody: getRandomArrItem(possibleReactions),
      username: getRandomName(),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = {
  getRandomName,
  getRandomEmail,
  getRandomThoughts,
  getThoughtReactions,
};
