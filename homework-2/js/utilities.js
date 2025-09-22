export const createTextElement = (tagName, content, classes) => {
  return (
    `<${tagName} class=${classes ?? ''}>
      ${content}
    </${tagName}>`
  )
};

export const createImgElement = (src, width) => {
  return (
    `<img src=${src} width=${width ?? '400'} />`
  )
}

export const createLinkElement = (content, id, classes) => {
  return (
    `<a href="#" id=${id} class=${classes}>${content}</a>`
  )
}