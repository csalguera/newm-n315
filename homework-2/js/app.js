import { changePage } from "../model/model.js";

const initListeners = () => {
  $("nav a").on("click", (e) => {
    e.preventDefault();
    let btnId = e.currentTarget.id;
    changePage(btnId);
  });

  $("#app").on("click", ".banner", (e) => {
    e.preventDefault();
    let bannerId = e.currentTarget.id;
    changePage(bannerId);
  });
};

$(document).ready(() => {
  changePage("home");
  initListeners();
});
