const queryStr = document.location.search;
// console.log(document.location.search);

const queries = new URLSearchParams(queryStr);
console.log(queries);
const firstname = queries.get("firstname");
const lastname = queries.get("lastname");
const avatarURL = queries.get("avatarimageurl");

const welcomeMessage = document.getElementById("welcomeMessage");
welcomeMessage.innerText = `Welcome ${firstname} ${lastname}`;

document.getElementById("avatar").src = `${avatarURL}`;
