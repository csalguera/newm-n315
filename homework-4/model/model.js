export const changePage = (pageName) => {
  if (!pageName) {
    $.get('pages/home.html' , (data) => {
      $('#app').html(data)
    }).fail((error) => {
      displayErrorPage(error, pageName)
    })
  } else {
    $.get(`pages/${pageName}.html` , (data) => {
      $('#app').html(data)
    }).fail((error) => {
      displayErrorPage(error, pageName)
    })
  }
}

const displayErrorPage = (error, pageName) => {
  $.get('pages/error.html', (data) => $('#app').html(data))
  console.log(error);
}