export const changePage = (pageName) => {
  if (!pageName) {
    $.get("pages/home.html", (data) => {
      $("#app").html(data);
    }).fail((error) => {
      displayErrorPage(error, "home");
    });
  } else {
    $.get(`pages/${pageName}.html`, (data) => {
      $("#app").html(data);
    }).fail((error) => {
      displayErrorPage(error, pageName);
    });
  }
};

const displayErrorPage = (error, pageName) => {
  $.get("pages/error.html", (data) => $("#app").html(data));
  Swal.fire({
    title: error.statusText,
    text: `You are missing the ${pageName}.html file`,
    icon: "error",
  }).then((result) => {
    if (result.value) {
      window.location = "/#home";
    }
  });
};
