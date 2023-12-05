const users = [
  {
    name: "Leanne Graham",
    username: "Bret",
    comapny: "Romaguera-Crona",
  },
  {
    name: "Chelsey Dietrich",
    username: "Kamren",
    comapny: "Keebler LLC",
  },
  {
    name: "Ervin Howell",
    username: "Antonette",
    comapny: "Deckow-Crist",
  },
];

function getUser() {
  setTimeout(() => {
    output = "";
    users.forEach((user, index) => {
      output += `<p key=${index}>Name: ${user.name} <br /> Username: ${user.username} <br /> Company: ${user.comapny.name}</p>`;
    }, 1000);
  });
}

function createUser(user) {
  return new Promise((resolve, reject) => {
    setTimeout((user) => {
      users.push(user);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong!");
      }
    }, 2000);
  });
}

createUser({
  name: "Mrs. Dennis Schulist",
  username: "Leopoldo_Corkery",
  company: "Considine-Lockman",
}).then(getUser);
