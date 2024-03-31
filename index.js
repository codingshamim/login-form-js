const allUser = [
  {
    id: "",
    name: "",
    email: "",
    password: "",
  },
];
const getUser = localStorage.getItem("users");

const registerPage = document.querySelector(".register-page");
const homePage = document.querySelector(".home-page");
// select form field

const userName = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");

// select error alert
let error = document.querySelector(".error");
function openRegister() {
  registerPage.style.display = "block";
  homePage.style.display = "none";
}

// register new user

function registerUser() {
  if (userName.value === "") {
    error.style.display = "block";
    error.innerText = "Username must be required !";
  } else if (email.value === "") {
    error.style.display = "block";
    error.innerText = "Email Address must be required !";
  } else if (password.value === "") {
    error.style.display = "block";
    error.innerText = "Password must be required !";
  } else if (password.value.length < 6) {
    error.style.display = "block";
    error.innerText = "Password must be grather or equal 6 character";
  } else {
    error.style.display = "none";
    const newUser = {
      id: crypto.randomUUID(),
      name: userName.value,
      email: email.value,
      password: password.value,
    };
    const checkUser = allUser.find((user) => user.email === newUser.email);
    if (checkUser === undefined) {
      allUser.push(newUser);
      localStorage.setItem("users", JSON.stringify({ users: allUser }));
    } else {
      error.style.display = "block";
      error.innerText = "This user already exist !";
    }
  }
}
