const users = [
  {
    name: "Leanne Graham",
    username: "Bret",
    company: "Romaguera-Crona",
  },
  {
    name: "Chelsey Dietrich",
    username: "Kamren",
    company: "Keebler LLC",
  },
  {
    name: "Ervin Howell",
    username: "Antonette",
    company: "Deckow-Crist",
  },
];

function getUsers() {
  setTimeout(() => {
    let output = "";
    users.forEach((user, index) => {
      output += `<p key=${index}>Name: ${user.name} <br /> Username: ${user.username} <br /> Company: ${user.company}</p>`;
    });
    let body = document.querySelector("#main");
    body.innerHTML = output;
  }, 1000);
}

function createUser(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
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

async function handleUsers() {
  await createUser({
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    company: "Considine-Lockman",
  });

  getUsers();
}

handleUsers();

async function fetchUsers() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);

  const data = await res.json();

  console.log(data);
}

fetchUsers();
