import {
  createTextElement,
  createImgElement,
  createLinkElement
} from "../js/utilities.js";

const errorPage = (
  `${createTextElement('h1', 'Page not found', 'title')}`
)

const homePage = (
  `
    ${createTextElement("h1", "Home", "title")}
    ${createTextElement("p", "Learn about the various Final Fantasy titles!", "text")}
    ${createLinkElement(`${createImgElement("images/final-fantasy-1-logo.avif")}`, 'ffi', 'banner')}
    ${createLinkElement(`${createImgElement("images/final-fantasy-2-logo.avif")}`, 'ffii', 'banner')}
    ${createLinkElement(`${createImgElement("images/final-fantasy-3-logo.avif")}`, 'ffiii', 'banner')}
    ${createLinkElement(`${createImgElement("images/final-fantasy-4-logo.avif")}`, 'ffiv', 'banner')}
  `
)

const createGamePage = (title, image, charTitle) => (
  `
    ${createTextElement("h1", title, "title")}
    ${createImgElement(image)}
    ${createTextElement("h2", charTitle, "title")}
  `
)

const gameData = {
  ffi: {
    title: 'Final Fantasy I',
    image: 'images/final-fantasy-1-logo.avif',
    charTitle: 'Characters',
  },
  ffii: {
    title: 'Final Fantasy II',
    image: 'images/final-fantasy-2-logo.avif',
    charTitle: 'Characters',
  },
  ffiii: {
    title: 'Final Fantasy III',
    image: 'images/final-fantasy-3-logo.avif',
    charTitle: 'Characters',
  },
  ffiv: {
    title: 'Final Fantasy IV',
    image: 'images/final-fantasy-4-logo.avif',
    charTitle: 'Characters',
  },
}

const pages = {
  home: homePage,
  ...Object.fromEntries(
    Object.entries(gameData).map(([id, { title, image, charTitle }]) => [
      id,
      createGamePage(title, image, charTitle)
    ])
  )
}

export const changePage = (pageName) => {
  $("#app").html(pages[pageName] || errorPage);
};
