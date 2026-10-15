const form1 = document.querySelector("#form1");

form1.addEventListener("submit", getFormvalue);

function getFormvalue(event) {
  event.preventDefault();

  const firstName = form1.fname.value;
  const lastName = form1.lname.value;

  console.log(`Name: ${firstName}, Last Name: ${lastName}`);

};