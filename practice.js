const users = [
  {
    name: "Brenda",
    age: 31,
    email: "brendafrenjo@gmail.com",
  },
  {
    name: "Susan",
    age: 25,
    email: "susanlimo@gmail.com",
  },
  {
    name: "Roman",
    age: 27,
    email: "romanlimbe@gmail.com",
  },
];

function getUsers() {
  setTimeout(() => {
    output = "";
    users.forEach((user, index) => {
      output += `<li key=${index}>${user.name} (${user.email}) is ${user.age} years of age.</li>`;
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
    });
  }, 2000);
}

// createUser({
// name: "Peter",
// age: 22,
// email: "peterkamakis@gmail.com",
// })
// .then(getUsers)
// .catch((err) => console.log(err));

// Async Await
// async function handleData() {
//   await createUser({
//     name: "Peter",
//     age: 22,
//     email: "peterkamakis@gmail.com",
//   });
//   getUsers();
// }

// handleData();

// Async Await with fetch
async function fetchUsers() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);

  const data = await res.json();

  console.log(data);
}

fetchUsers();

//Promise all
// const promise1 = Promise.resolve("Hello World");
// const promise2 = 35;
// const promise3 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 2000, "Goodbye")
// );
// const promise4 = fetch(`https://jsonplaceholder.typicode.com/users`).then(
//   (res) => res.json()
// );

// Promise.all([promise1, promise2, promise3, promise4]).then((values) => {
//   let output = "";
//   values.forEach((value, key) => {
//     if (key === 3) {
//       value.forEach((user, key) => {
//         output += `<p key=${key}>Username: ${user.username} <br /> Name: ${user.name}  <br /> Email: ${user.email} </p>`;
//       });
//     } else {
//       output += `<p key=${key}>${value}</p>`;
//     }
//   });
//   let body = document.querySelector("#main");
//   body.innerHTML = output;
// });
