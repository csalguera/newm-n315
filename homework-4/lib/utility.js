export const showAlert = () => {
  const alertContainer = document.querySelector(".alert-container");
  alertContainer.classList.add("show");
};

export const hideAlert = () => {
  const alertContainer = document.querySelector(".alert-container");
  alertContainer.classList.remove("show");
  if(alertContainer) alertContainer.remove()
};

export const createAlert = (alertObj) => {
  const alertContainer = document.createElement("div");
  alertContainer.className = "alert-container";

  const alertCallout = document.createElement("div");
  alertCallout.className = "alert-callout";

  const title = document.createElement("h1");
  title.textContent = alertObj.title;

  const message = document.createElement("p");
  message.textContent = alertObj.message;

  const closeAlert = document.createElement("span");
  closeAlert.className = "close-alert";
  closeAlert.textContent = "X";

  const btnBar = document.createElement("div");
  btnBar.className = "btn-bar";

  const btnConfirm = document.createElement("div");
  btnConfirm.className = "btn-confirm";
  btnConfirm.textContent = "Ok";

  // const btnCancel = document.createElement("div");
  // btnCancel.className = "btn-cancel";
  // btnCancel.textContent = "Cancel";

  alertContainer.appendChild(alertCallout);
  alertCallout.append(title, message, closeAlert, btnBar);
  btnBar.append(btnConfirm);
  document.body.appendChild(alertContainer);
};

export const validPassword = (password) => {
  const specialChars = /[!@#$%^&*(),.?":{}<>]/.test(password);
  const uppercaseLetters = /[A-Z]/.test(password);
  const numbers = /[\d]/.test(password);

  return specialChars && uppercaseLetters && numbers;
};
