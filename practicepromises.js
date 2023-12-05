const promise1 = Promise.resolve("Hello World");
const promise2 = 38;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "Goodbye 👋👋");
});
const promise4 = fetch(`https://jsonplaceholder.typicode.com/users`).then(
  (res) => res.json()
);

Promise.all([promise1, promise2, promise3, promise4]).then((values) => {
  console.log(values);
  let output = "";
  values.forEach((value, key) => {
      if (key === 3) {
        value.forEach((user, key) => {
            output += `<p key=${key}>Name: ${user.name} <br /> Username: ${user.username} <br /> Email: ${user.email} <br /> Address: ${  user.address}</p>`;
        });
    } else {
      return (output += `<p key=${key}>${value}</p>`);
    }
  });
  let body = document.querySelector("#main");
  body.innerHTML = output;
});

if (condition) {
} else {
}
