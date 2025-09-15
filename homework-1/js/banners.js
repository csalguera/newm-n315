// cached element references
const bannersRef = document.querySelector('.banners-container')

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