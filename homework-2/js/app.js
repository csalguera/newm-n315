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

  $("#app").on("mouseover", ".character", (e) => {
    $(e.currentTarget).find("figcaption").addClass("show-caption");
  });

  $("#app").on("mouseout", ".character", (e) => {
    $(e.currentTarget).find("figcaption").removeClass("show-caption");
  });
};

$(document).ready(() => {
  changePage("home");
  initListeners();
});
