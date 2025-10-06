import { changePage } from "../model/model.js";
import {
  createAlert,
  showAlert,
  hideAlert,
  validPassword,
} from "../lib/utility.js";

const loginMsg = "Successfully logged in."
const signupMsg = "Successfully created an account."

const route = () => {
  const hash = window.location.hash;
  const id = hash.replace("#", "");
  changePage(id);
};

const showError = (title, message) => {
  createAlert({ title, message });
  showAlert();
};

const submitForm = (e, msg) => {
  e.preventDefault();
  let username = $("#username").val().trim();
  let password = $("#password").val().trim();

  if (!username)
    return showError(
      "Invalid Username",
      "Username cannot be empty."
    );
  if (username.length > 12)
    return showError(
      "Invalid Username",
      "Username must be no more than 12 characters long."
    );
  if (username.includes(" "))
    return showError(
      "Invalid Username",
      "Username cannot contain spaces."
    );

  if (!password)
    return showError(
      "Invalid Password",
      "Password cannot be empty."
    );
  if (password.length < 8)
    return showError(
      "Invalid Password",
      "Password must contain at least 8 characters."
    );
  if (password.includes(" "))
    return showError(
      "Invalid Password",
      "Password cannot contain spaces."
    );
  if (!validPassword(password))
    return showError(
      "Invalid Password",
      "Password must contain at least one special character, uppercase letter, and a number."
    );

  createAlert({
    title: "Success",
    message: msg,
  });
  showAlert();
};

const init = () => {
  $(window).on("hashchange", route);
  route();

  $(document).on("click", "#btn-login", (e) => submitForm(e, loginMsg));
  $(document).on("click", "#btn-signup", (e) => submitForm(e, signupMsg));
  $(document).on("click", ".btn-confirm, .close-alert", hideAlert);
};

$(document).ready(() => {
  init();
});
