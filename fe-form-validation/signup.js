//Get element
const signUpForm = document.getElementById("signup-form");
const firstNameInput = document.getElementById("firstname");
const lastNameInput = document.getElementById("lastname");
const usernameInput = document.getElementById("username");
const avatarImageInput = document.getElementById("avatarimageurl");

//Add listener
firstNameInput.addEventListener("blur", validateFirstName);
lastNameInput.addEventListener("blur", validateLastName);
usernameInput.addEventListener("blur", validateUsername);
avatarImageInput.addEventListener("blur", validateAvatarURL);
signUpForm.addEventListener("submit", handleSubmit);

//Validate firstName functions
function isFirstNameValid(firstName) {
  const regex = /^[a-z '-]+$/gi;
  return regex.test(firstName);
}

function validateFirstName(event) {
  const firstname = event.target.value;
  const isValidFirstName = isFirstNameValid(firstname);
  if (isValidFirstName) {
    firstNameInput.classList.add("green-border");
    firstNameInput.classList.remove("red-border");
  } else {
    firstNameInput.classList.add("red-border");
    firstNameInput.classList.remove("green-border");
  }
}

//Validate lastName functions
function isLastNameValid(lastName) {
  const regex = /^[a-z ,.'-]+$/gi;
  return regex.test(lastName);
}

function validateLastName(event) {
  const lastName = event.target.value;
  const isValidLastName = isLastNameValid(lastName);
  if (isValidLastName) {
    lastNameInput.classList.add("green-border");
    lastNameInput.classList.remove("red-border");
  } else {
    lastNameInput.classList.add("red-border");
    lastNameInput.classList.remove("green-border");
  }
}

//Validate username functions
function isUsernameValid(username) {
  return username.length < 20;
}

function validateUsername(event) {
  const username = event.target.value;
  const isValidUsername = isUsernameValid(username);
  if (isValidUsername) {
    usernameInput.classList.add("green-border");
    usernameInput.classList.remove("red-border");
  } else {
    usernameInput.classList.add("red-border");
    usernameInput.classList.remove("green-border");
  }
}

//Validate avatar image URL functions
function isAvatarUrlValid(URL) {
  const regex =
    /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
  return regex.test(URL);
}

function validateAvatarURL(event) {
  const avatarURL = event.target.value;
  const isValidAvatarUrl = isAvatarUrlValid(avatarURL);
  if (isValidAvatarUrl) {
    avatarImageInput.classList.add("green-border");
    avatarImageInput.classList.remove("red-border");
  } else {
    avatarImageInput.classList.add("red-border");
    avatarImageInput.classList.remove("green-border");
  }
}

//function for submit button

function handleSubmit(event) {
  const submittedFirstName = event.target[0].value;
  const submittedLastName = event.target[1].value;
  const submittedUsername = event.target[2].value;
  const submittedAvatarUrl = event.target[3].value;

  const validFirstName = isFirstNameValid(submittedFirstName);
  const validLastName = isLastNameValid(submittedLastName);
  const validUsername = isUsernameValid(submittedUsername);
  const validAvatarUrl = isAvatarUrlValid(submittedAvatarUrl);
  if (!validFirstName || !validLastName || !validUsername || !validAvatarUrl) {
    event.preventDefault();
  }
}
