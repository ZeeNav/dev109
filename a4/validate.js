function validateForm() {
  let valid = true;

  const errorFields = [
    "Firstname", "Lastname", "Email", "Phone", "Username",
    "Password", "Address", "City", "State", "Country", "Zipcode"
  ];
  errorFields.forEach(field => document.getElementById("error" + field).innerHTML = "");

  const firstname = document.getElementById("firstname").value.trim();
  const lastname = document.getElementById("lastname").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const address = document.getElementById("address").value.trim();
  const city = document.getElementById("city").value.trim();
  const state = document.getElementById("state").value;
  const country = document.getElementById("country").value;
  const zipcode = document.getElementById("zipcode").value.trim();


  const namePattern = /^[A-Za-z]{1,20}$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const phonePattern = /^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/;
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{1,7}$/;

  if (!namePattern.test(firstname)) {
    document.getElementById("errorFirstname").innerHTML = "<b>First name must be alphabetic and ≤ 20 characters.</b>";
    valid = false;
  }

  if (!namePattern.test(lastname)) {
    document.getElementById("errorLastname").innerHTML = "<b>Last name must be alphabetic and ≤ 20 characters.</b>";
    valid = false;
  }

  if (!emailPattern.test(email)) {
    document.getElementById("errorEmail").innerHTML = "<b>Email is invalid.</b>";
    valid = false;
  }

  if (!phonePattern.test(phone)) {
    document.getElementById("errorPhone").innerHTML = "<b>Phone must be 10 digits, may include dashes.</b>";
    valid = false;
  }

  if (username === "" || username.length > 12) {
    document.getElementById("errorUsername").innerHTML = "<b>Username is required and ≤ 12 characters.</b>";
    valid = false;
  }

  if (!passwordPattern.test(password)) {
    document.getElementById("errorPassword").innerHTML =
      "<b>Password must be ≤ 7 characters, include 1 uppercase, 1 lowercase, 1 number, and 1 special character.</b>";
    valid = false;
  }

  if (address === "") {
    document.getElementById("errorAddress").innerHTML = "<b>Address is required.</b>";
    valid = false;
  }

  if (city === "") {
    document.getElementById("errorCity").innerHTML = "<b>City is required.</b>";
    valid = false;
  }

  if (state === "") {
    document.getElementById("errorState").innerHTML = "<b>State is required.</b>";
    valid = false;
  }

  if (country === "") {
    document.getElementById("errorCountry").innerHTML = "<b>Country is required.</b>";
    valid = false;
  }

  if (country === "USA") {
    if (!/^\d{5}$/.test(zipcode)) {
      document.getElementById("errorZipcode").innerHTML = "<b>Zip code must be exactly 5 digits.</b>";
      valid = false;
    }
  }

  return valid;
}

