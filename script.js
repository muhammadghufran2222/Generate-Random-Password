// const passwordBox = document.getElementById("password");
// const Length = 12;
// const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const lowerCase = "abcdefghijklmnopqrstuvwxyz";
// const number = "0123456789";
// const symbol = "@#$%^&*()_+~}|{[]}>< /-=";

// const allChars = upperCase + lowerCase + number + symbol;

// function createPassword() {
//   let password = "";
//   password += upperCase[Math.floor(Math.random() * upperCase.length)];
//   password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
//   password += number[Math.floor(Math.random() * number.length)];

//   while (length > password.length) {
//     password += allChars[Math.floor(Math.random() * allChars.length)];
//   }
//   passwordBox.value = password;
// }

const passwordBox = document.getElementById("password");
const Length = 12; // Notice the capital L
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~}|{[]}>< /-=";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];

  while (Length > password.length) {
    // Use Length here
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  // Check if passwordBox exists before setting the value
  if (passwordBox) {
    passwordBox.value = password;
  } else {
    console.error("Element with id 'password' not found");
  }
}

function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
}
