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

      let error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong!");
      }
    });
  }, 2000);
}

//createUser({
 // name: "Peter",
 // age: 22,
 // email: "peterkamakis@gmail.com",
//})
 // .then(getUsers)
// .catch((err) => console.log(err));
 
//Promise all
