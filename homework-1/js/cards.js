// cached element references
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.querySelector('.close');
const blcCardsRef = document.querySelector('#blc-cards')
const htrCardsRef = document.querySelector('#htr-cards')
const jjkCardsRef = document.querySelector('#jjk-cards')
const cghCardsRef = document.querySelector('#cgh-cards')

const blcCards = [
  { src: 'images/UE01BT_BLC-1-041.png', alt: 'ichigo-2star' },
  { src: 'images/UE01BT_BLC-1-050.png', alt: 'byakuya-2star' },
  { src: 'images/UE01BT_BLC-1-085.png', alt: 'hitsugaya-2star' },
  { src: 'images/UE01BT_BLC-1-020.png', alt: 'jugram-2star' },
]

const htrCards = [
  { src: 'images/UE02BT_HTR-1-078.png', alt: 'gon-2star' },
  { src: 'images/UE02BT_HTR-1-094.png', alt: 'killua-2star' },
  { src: 'images/UE02BT_HTR-1-043.png', alt: 'hisoka-2star' },
  { src: 'images/UE02BT_HTR-1-037.png', alt: 'chrollo-2star' },
  { src: 'images/UE02BT_HTR-1-050.png', alt: 'illumi-2star' },
]

const jjkCards = [
  { src: 'images/UE03BT_JJK-1-040_p1.png', alt: 'yuji-2star' },
  { src: 'images/UE03BT_JJK-1-022_p1.png', alt: 'megumi-2star' },
  { src: 'images/UE03BT_JJK-1-008_p1.png', alt: 'nobara-2star' },
  { src: 'images/UE03BT_JJK-1-012_p1.png', alt: 'gojo-2star' },
  { src: 'images/UE03BT_JJK-1-048_p1.png', alt: 'sukuna-2star' },
  { src: 'images/UE03BT_JJK-1-069_p1.png', alt: 'geto-2star' },
]

const cghCards = [
  { src: 'images/UE04BT_CGH-1-022_p1.png', alt: 'gawain-2star' },
  { src: 'images/UE04BT_CGH-1-060_p1.png', alt: 'Lancelot-2star' },
  { src: 'images/UE04BT_CGH-1-007_p1.png', alt: 'c.c.-2star' },
  { src: 'images/UE04BT_CGH-1-084_p1.png', alt: 'nunnally-2star' },
  { src: 'images/UE04BT_CGH-1-047_p1.png', alt: 'euphemia-2star' },
  { src: 'images/UE04BT_CGH-1-081_p1.png', alt: 'shirley-2star' },
]

const renderCards = (container, cards) => {
  if (!container) return

  const frag = document.createDocumentFragment()

  cards.forEach(({ src, alt }) => {
    const img = document.createElement('img')
    img.src = src
    img.alt = alt
    img.className = 'card'
    
    img.addEventListener('click', () => {
      if (!modal || !modalImg) return
      modal.style.display = 'flex'
      modalImg.src = src
      modalImg.alt = alt
    })
    frag.append(img)
  })
  container.append(frag)
}

renderCards(blcCardsRef, blcCards)
renderCards(htrCardsRef, htrCards)
renderCards(jjkCardsRef, jjkCards)
renderCards(cghCardsRef, cghCards)

if (closeBtn && modal) {
  closeBtn.addEventListener('click', () => (modal.style.display = 'none'))

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none'
  })
}