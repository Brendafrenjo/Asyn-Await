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
    });
  });
}

getUser();
