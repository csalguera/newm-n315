import { changePage } from "../model/model.js";

const route = () => {
  const hash = window.location.hash;
  let pageId = hash.replace("#", "");
  changePage(pageId);
};

const init = () => {
  $(window).on("hashchange", route);
  route();
};

$(document).ready(() => {
  init();
});
