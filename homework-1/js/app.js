const navRef = document.querySelector('.navbar')

const home = document.createElement('a')
home.href = 'index.html'
home.textContent = 'Home'

const dropDown = document.createElement('div')
dropDown.className = 'dropdown'

const dropBtn = document.createElement('button')
dropBtn.className = 'dropbtn'
dropBtn.textContent = 'Titles'

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

const rules = document.createElement('a')
rules.href = 'rules.html'
rules.textContent = 'Rules'

navRef.append(home, dropDown, rules)