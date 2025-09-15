// cached element references
const navRef = document.querySelector('.navbar')
const bannersRef = document.querySelector('.banners-container')

// home link
const home = document.createElement('a')
home.href = 'index.html'
home.textContent = 'Home'

// dropdown
const dropDown = document.createElement('div')
dropDown.className = 'dropdown'

// titles button
const dropBtn = document.createElement('button')
dropBtn.className = 'dropbtn'
dropBtn.textContent = 'Titles'

// title links
const dropDownContent = document.createElement('div')
dropDownContent.className = 'dropdown-content'

const titles = [
  { href: 'blc.html', text: 'Bleach' },
  { href: 'htr.html', text: 'Hunter x Hunter' },
  { href: 'jjk.html', text: 'Jujutsu Kaisen' },
  { href: 'cgh.html', text: 'Code Geass' },
]

titles.forEach(({ href, text }) => {
  const a = document.createElement('a')
  a.href = href
  a.textContent = text
  dropDownContent.appendChild(a)
})

dropDown.append(dropBtn, dropDownContent)

// rules link
const rules = document.createElement('a')
rules.href = 'rules.html'
rules.textContent = 'Rules'

navRef.append(home, dropDown, rules)

const banners = [
  { href: 'blc.html', src: 'images/blc-banner.png', alt: 'bleach banner' },
  { href: 'htr.html', src: 'images/htr-banner.png', alt: 'hunter x hunter banner' },
  { href: 'jjk.html', src: 'images/jjk-banner.png', alt: 'jujutsu kaisen banner' },
  { href: 'cgh.html', src: 'images/cgh-banner.png', alt: 'code geass banner' },
]

banners.forEach(({ href, src, alt }) => {
  const a = document.createElement('a')
  a.href = href
  const img = document.createElement('img')
  img.src = src
  img.alt = alt
  img.className = 'banner'
  a.appendChild(img)
  bannersRef.appendChild(a)
})