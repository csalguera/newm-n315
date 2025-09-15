// cached element references
const navRef = document.querySelector('.navbar')
const footerRef = document.querySelector('.footer')

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

const attributions = document.createElement('a')
attributions.href = 'attributions.md'
attributions.textContent = 'Attributions'
attributions.target = '_blank'

const divider = document.createElement('p')
divider.textContent = '|'

const gitHub = document.createElement('a')
gitHub.href = 'https://github.com/csalguera/newm-n315/tree/main/homework-1'
gitHub.textContent = 'GitHub'
gitHub.target = '_blank'

footerRef.append(attributions, divider, gitHub)