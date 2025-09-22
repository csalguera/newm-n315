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
    ${createLinkElement(`${createImgElement("images/ffi/final-fantasy-1-logo.avif")}`, 'ffi', 'banner')}
    ${createLinkElement(`${createImgElement("images/ffii/final-fantasy-2-logo.avif")}`, 'ffii', 'banner')}
    ${createLinkElement(`${createImgElement("images/final-fantasy-3-logo.avif")}`, 'ffiii', 'banner')}
    ${createLinkElement(`${createImgElement("images/final-fantasy-4-logo.avif")}`, 'ffiv', 'banner')}
  `
)

const createGamePage = (title, image, charTitle, characters = []) => {
  const characterImgs = characters.map(({ name, image }) => (
    `
      <figure class="character">
      ${createImgElement(image)}
      <figcaption>${name}</figcaption>
      </figure>
    `
  )).join("")

  return (
    `
      ${createTextElement("h1", title, "title")}
      ${createImgElement(image)}
      ${createTextElement("h2", charTitle, "title")}
      <div class="characters">${characterImgs}</div>
    `
  )
}

const gameData = {
  ffi: {
    title: 'Final Fantasy I',
    image: 'images/ffi/final-fantasy-1-logo.avif',
    charTitle: 'Characters',
    characters: [
      { name: "Warrior", image: 'images/ffi/Warrior-ff1-art.webp' },
      { name: "Thief", image: 'images/ffi/Thief-ff1-art.webp' },
      { name: "Monk", image: 'images/ffi/Monk-ff1-art.webp' },
      { name: "Red Mage", image: 'images/ffi/Redmage-ff1-art.webp' },
      { name: "White Mage", image: 'images/ffi/Whitemage-ff1-art.webp' },
      { name: "Black Mage", image: 'images/ffi/blackmage-ff1-art.webp' },
    ],
  },
  ffii: {
    title: 'Final Fantasy II',
    image: 'images/ffii/final-fantasy-2-logo.avif',
    charTitle: 'Characters',
    characters: [
      'images/ffii/Firion-art.webp',
      'images/ffii/FFII_DoS_Maria.webp',
      'images/ffii/FFII_DoS_Guy.webp',
      'images/ffii/FFII_DoS_Leon.webp',
    ],
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
    Object.entries(gameData).map(([id, { title, image, charTitle, characters }]) => [
      id,
      createGamePage(title, image, charTitle, characters)
    ])
  )
}

export const changePage = (pageName) => {
  $("#app").html(pages[pageName] || errorPage);
};
