const posts = [
  {
    title: "Post One",
    body: "This is post one",
  },
  {
    title: "Post Two",
    body: "This is post two",
  },
];
function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li key=${index}>${post.title} says: ${post.body}</li>`;
    });
    let body = document.querySelector("#main");
    body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject(`Error: Something went wrong!`);
      }
    }, 2000);
  });
}

createPost({ title: "Title Three", body: "This is post three" }).then(getPosts);
