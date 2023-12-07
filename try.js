const users = [
  {
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    website: "anastasia.net",
  },
  {
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    website: "kale.biz",
  },
  {
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    website: "ola.org",
  },
  {
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    website: "conrad.com",
  },
];

function getUsers() {
  setTimeout(() => {
    let output = "";
    users.forEach((user, index) => {
      output += `<p key=${index}>Name: ${user.name} <br /> Username: ${user.username} <br /> Email: ${user.email} <br /> Website: ${user.website}</p>`;
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
    name: "Clementina DuBuque",
    username: "Clementina DuBuque",
    email: "Rey.Padberg@karina.biz",
    website: "ambrose.net",
  });

  getUsers();
}

async function fetchUsers() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);

  const data = await res.json();

  let output = "";

  data.forEach((user, index) => {
    output += `<p key=${index}>Name: ${user.name} <br /> Username: ${user.username} <br /> Phone: ${user.phone} <br /> Email: ${user.email} <br /> Website: ${user.website} <br /> Company: ${user.company.name}</p>`;
  });
    let userData = document.querySelector("#content");
    userData.innerHTML = output;
}

handleUsers();
fetchUsers();
